import React from "react";

function basicButton({text='', name='', id='', onClick=(e)=>{}, overrides={}})
{
    return <button id={id} name={name} onClick={onClick} style={overrides}>{text}</button>
}

export default basicButton;