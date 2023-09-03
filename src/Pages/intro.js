import React from "react";

function intro(){
    return <section>
    <div className="img-intro">
        <img src="https://www.freecodecamp.org/news/content/images/2021/11/fresh.png" style={{
            height:"50vh",
        }}></img>
        <h1 className="intro-title">What is MixMatch?</h1>
    </div>
    <div>
    <p style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Poppins"
        }}>MixMatch is a website that gives you confidence to wear color, by showing you what colors co-ordinate with the clothing you have!</p>
    </div>
    </section>
};

export default intro;