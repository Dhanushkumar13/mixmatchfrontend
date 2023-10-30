import React from "react";

function Home(){
    return (
        <section className="section-home">
            <div className="img-home">
            <img src="https://img.freepik.com/free-photo/confident-woman-trendy-fur-coat-dress-walking-past-purple-background_197531-7107.jpg" alt="" className="img-home" style={{
                height: "50%",
                display: "flex",
            }}></img>
            </div>
            <h1 className="home-class">MIXMATCH</h1>
            <p style={{
                color: "#ffff00"
            }}>Wear Color with Confidence!</p>
        </section>

    );

}

export default Home;