
import React, { useState } from 'react'
import axios from 'axios';
import "../App.css";

import { useHistory } from 'react-router-dom';



const New=()=>{
    const[error, setError] = useState([])
    const history = useHistory();

    const [name, setName] = useState(""); 
    const [type, settype] = useState(""); 
    const [desc, setdesc] = useState(""); 
    const [skill1, setskill1] = useState(""); 
    const [skill2, setskill2] = useState(""); 
    const [skill3, setskill3] = useState(""); 

    const onSubmitHandler = e => {
       

 
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet', {
            name,
            type,
            desc,
            skill1,
            skill2,
            skill3,
            
            
        })
        .then(res=>history.push("/pet"))
        // .catch(err=> {console.log(err)
        .catch(err=> {
            const errorObj = err.response.data.errors
            let errArr = []
            for (const key of Object.keys(errorObj)){
                errArr.push(errorObj[key].message)
            }
            setError(errArr)
        })
    }

    return(
        <>
      <h1>Pet Shaeler</h1>
      <a href={"/pet"}>back to home</a>
  
<div className="bor">
 <form onSubmit={onSubmitHandler}>
       {error.map((error,i) => <p key={i}>{error}</p>)}
           <p>
               <label>  Name </label><br/>
               <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                   {/* {nameError} */}
           </p>
           <p>
               <label>type</label><br/>
               <input type="text" onChange={(e)=>settype(e.target.value)} value={type}/>
                   {/* {imgError} */}
           </p>
           <p>
               <label>desc </label><br/>
               <input type="text" onChange={(e)=>setdesc(e.target.value)} value={desc}/>
                   {/* {numError} */}
           </p>
           
           <p>
               <label>skill 1</label><br/>
               <input type="text" onChange={(e)=>setskill1(e.target.value)} value={skill1}/>
                   {/* {phraesError} */}
           </p>
           <p>
               <label>skill 2</label><br/>
               <input type="text" onChange={(e)=>setskill2(e.target.value)} value={skill2}/>
                   {/* {phraesError} */}
           </p>
           <p>
               <label>skill 3</label><br/>
               <input type="text" onChange={(e)=>setskill3(e.target.value)} value={skill3}/>
                   {/* {phraesError} */}
           </p>

          
           <input id ="add"type="submit"/>
       </form>
       </div>
       
    
        
        
        
        
        
        </>
    )
}
export default New;