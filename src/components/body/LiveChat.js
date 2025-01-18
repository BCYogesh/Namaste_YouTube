import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/slice/chatSlice";
import { nameGenerate, randomStringGenerate } from "../../utils/helper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const [chat, setChat] = useState("");
    const chatMessage = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const interval = setInterval(() => {
            // API polling
            dispatch(
                addMessage({
                    name: nameGenerate(),
                    message: randomStringGenerate(20),
                })
            );
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="w-full h-[480px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                {chatMessage.map((chat, id) => (
                    <ChatMessage key={id} name={chat?.name} message={chat?.message} />
                ))}
            </div>
            <form
                className="flex items-center mt-1"
                onSubmit={(e) => {
                    e.preventDefault();

                    dispatch(
                        addMessage({
                            name: "Yogesh",
                            message: chat,
                        })
                    );

                    setChat("");
                }}
            >
                <input
                    type="text"
                    value={chat}
                    className="rounded-lg w-full ml-2 px-2 p-1 border border-black"
                    placeholder="Chat with live..."
                    onChange={(e) => setChat(e.target.value)}
                />
                <button className="rounded-lg bg-green-300 font-semibold border border-black px-2 p-1">
                    Submit
                </button>
            </form>
        </>
    );
};

export default LiveChat;
