import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuFlag = useSelector((store) => store.app.toggleMenuFlag);

    if (!isMenuFlag) return null;

    return (
        <div className="p-5 shadow-lg col-span-1 w-40">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>Shorts</li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li>Movies</li>
                <li>Sports</li>
                <li>Entertainment</li>
                <li>Comedy</li>
            </ul>
            <h1 className="font-bold pt-5">Watch later</h1>
            <ul>
                <li>Movies</li>
                <li>Sports</li>
                <li>Entertainment</li>
                <li>Comedy</li>
            </ul>
        </div>
    );
};

export default Sidebar;
