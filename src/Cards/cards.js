import React,{useState} from "react";

function Card({background=" ", data={} }){
    const [image,setImage] = useState([])
    return(
        <div className="card" style={{"width": "100%"}}>
            <div className="card-body">
            <h5 className="card-title" style={{fontFamily:"font-family: 'Work Sans', sans-serif"}}>{data.colorName}</h5>
            <p className="card-text">{data.colorDescription}</p>
                <div className="img-container">
                    <img className="color-img"src={data.colorImage[0]}></img>
                    <img className="color-img"src={data.colorImage[1]}></img>
                    <img className="color-img"src={data.colorImage[4]}></img>
                </div>
            </div>
        </div>
    )
}

export default Card;