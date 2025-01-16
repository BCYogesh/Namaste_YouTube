import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/slice/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"));

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="flex  flex-col">
            <div className="flex">
                <div className="px-5 py-5">
                    <iframe
                        width="853"
                        height="480"
                        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-xl"
                    ></iframe>
                </div>
                <div className="w-full mr-5 py-5 px-2">
                    <LiveChat />
                </div>

            </div>
            <div>
                <CommentContainer />
            </div>

        </div>


    );
};

export default WatchPage;
