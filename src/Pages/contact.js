import React,{useState, useEffect} from "react";
import Axios from 'axios';

function contact(){
    const url="https://mix-match.onrender.com/api/contact/create/"
    const [data,setData] = useState({
        contactName: "",
        contactEmail: "",
        contactSubject: "",
        contactMessage: ""
    })

    function handleSubmit(e){
        e.preventDefault();
        Axios.post(url,{
            contactName: data.title,
            contactEmail: data.email,
            contactSubject: data.subject,
            contactMessage: data.message
        })
        .then(res=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log('Error', err)
        })
    }

    function handleChange(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return(
        <form onSubmit={(e)=> handleSubmit(e)}> 
            {/* method='post'onSubmit={handleSubmit} */}
            <h1>Contact <span> Us </span></h1>
            <input type="title" id="title"  onChange={(e)=>handleChange} value={contact.title} placeholder="John"></input>
            <input type="email" id="email"  onChange={(e)=>handleChange} value={contact.email} placeholder="example@gmail.com"></input>
            <input type="text" name="subject" id="subject"  onChange={(e)=>handleChange} value={contact.subject} placeholder="Enter Subject"></input>
            <textarea name="message" id="message" cols="30" rows="10"  onChange={(e)=>handleChange} value={contact.message} placeholder="Enter Message"/>
            <div>
            <button type="submit" className="submit-btn">Send</button>
            </div>
        </form>
    )
};

export default contact;