import React, { Component } from 'react';
import { useState } from "react";
import Avataaar from "./avatar";

export class YourAvatar extends Component {
    
    static displayName = YourAvatar.name;
    
    
     
    render() {
        
        return (
            <Avataar />
        );
    }
}
function Avataar() {

    const [Attributes, setAttributes] = useState({
        topType: "",
        accessoriesType: "",
        hairColor: "",
        facialHairType: "",
        clotheType: "",
        clotheColor: "",
        eyeType: "",
        eyebrowType: "",
        mouthType: "",
        avatarStyle: "",
        skinColor: "",
    });
    function saveAvatar() {
        setAttributes();
    }
    return (
        <div className="your-avatar-body">
            <div>
                <p>Customize your avatar to use in multilayer settings.</p>
                <Avataaar value={Attributes} onChange={setAttributes} />
                <button type='button' onClick={saveAvatar}>Save</button>
            </div>

        </div>
    );
};