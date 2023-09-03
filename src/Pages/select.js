import React,{useState, useEffect} from "react";
import Card from '../Cards/cards';

function select(){

    const [select,setSelect] = useState([]);

    useEffect(()=>{
        fetch('https://mix-match.onrender.com/api/color')
        .then((response)=>response.json())
        .then((res)=>{
            if(res.result){
                console.log(res.result)
                setSelect(res.result)
            }
        })
        .catch((err)=>console.log("Error",err))

    },[]);

    return (
        <section>
                <h1 style={{color:"#FFD971"}}>Select the right match for you💃</h1>
                <p style={{fontFamily:"Poppins" ,color:"#FFD971"}}>for each and everyday!</p>
                <div className="categories-listing-section">
                {
                    select.map((categories,index)=>
                    <Card key={`Card-${index}`}background="#FEF1E0" data={categories}/>
                    )
                }
                </div>
        </section>
    )
    }

export default select;