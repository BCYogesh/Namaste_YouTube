import React from "react";
import Button from "./Button";

const ButtonList = () => {
    return (
        <div className="flex">
            <Button name="All" />
            <Button name="Live" />
            <Button name="Podcasts" />
            <Button name="Music" />
            <Button name="News" />
            <Button name="Trailers" />
            <Button name="Masala Films" />
            <Button name="Sports" />
            <Button name="Playlists" />
            <Button name="Recently uploaded" />

        </div>
    );
};

export default ButtonList;
