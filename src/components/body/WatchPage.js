import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/slice/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"));

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="d-flex flex-col">
            <div className="px-5">
                <iframe
                    width="1000"
                    height="500"
                    src={"https://www.youtube.com/embed/" + searchParam.get("v")}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            <CommentContainer />
        </div>
    );
};

export default WatchPage;
