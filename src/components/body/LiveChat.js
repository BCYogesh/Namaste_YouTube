import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/slice/chatSlice";
import { nameGenerate, randomStringGenerate } from "../../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.chat.messages)

    useEffect(() => {
        const interval = setInterval(() => {
            // API polling
            dispatch(
                addMessage({
                    name: nameGenerate(),
                    message: randomStringGenerate(20),
                })
            )
        }, 500)

        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <div className="w-full h-[480px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                {chatMessage.map((chat, id) => (
                    <ChatMessage key={id} name={chat?.name} message={chat?.message} />

                ))}
            </div>
        </>
    )
};

export default LiveChat;