import React from "react";
import BasicButtons from "../Elements/BasicButtons";
import { useNavigate } from 'react-router-dom';


function Landing(){
    const navigate = useNavigate();
    return <section className="web-page-layout">
        <div className="onboarding-page-container">
            <h1>MIXMATCH</h1>
            <p>Where we do wonders with colors ♥</p>
            <BasicButtons text="Welcome" id="Welcome" name="Welcome" onClick={()=> navigate ('/home')} overrides={{
                background: "#5A2366",
            }}/>
        </div>
    </section>
};

export default Landing;
