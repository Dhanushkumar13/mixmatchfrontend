import React from "react";

function Card({background=" ", data={} }){
    return(
        <div className="card" style={{"width": "100%"}}>
            <div className="card-body">
            <h5 className="card-title" style={{fontFamily:"font-family: 'Work Sans', sans-serif"}}>{data.colorName}</h5>
            <p className="card-text">{data.colorDescription}</p>
                <div className="img-container">
                    <img className="color-img"src={data.colorImage[0]} alt=""></img>
                    <img className="color-img"src={data.colorImage[1]} alt=""></img>
                    <img className="color-img"src={data.colorImage[4]} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Card;