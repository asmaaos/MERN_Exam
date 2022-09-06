import React, { useState,useEffect} from 'react'
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'



const Update = () => {
    const [name, setName] = useState(""); 
    const [type, settype] = useState("");
    const [desc, setdesc] = useState("");
    const [skill1,setskill1] = useState("");
    const [skill2,setskill2] = useState("");
    const [skill3,setskill3] = useState("");
   
    const[error, setError] = useState([])
    
    const history = useHistory();
    const {id} = useParams();
    // const [user, setUser] = useState({})
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/pet/"+id)
        .then(res => {setName(res.data.name)
            settype(res.data.type)
            setdesc(res.data.desc)
            setskill1(res.data.skill1)
            setskill2(res.data.skill2)
            setskill3(res.data.skill3)

        })
          
        .catch(err => console.error(err))
    },[id])

 
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/update/'+id, {
            name,
            type,
            desc,
            skill1,
            skill2,
            skill3
        })
            .then( console.log("done"))
            .catch(err=> {
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })    
           
    }
    return (
        <>
          <a href="/pet">Back to home </a>
       <h2>Edit :{name}</h2>
        <form onSubmit={onSubmitHandler}>
            {error.map((error,i) => <p key={i}>{error}</p>)}
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>typt</label><br/>
                <input type="text" onChange={(e)=>settype(e.target.value)} value={type}/>
            </p>
            <p>
                <label>desc</label><br/>
                <input type="text" onChange={(e)=>setdesc(e.target.value)} value={desc}/>
            </p>
            
            <h2>Skilles </h2>
            <p>
                <label>skill1</label><br/>
                <input type="text" onChange={(e)=>setskill1(e.target.value)} value={skill1}/>
            </p>
            <p>
                <label>skill2</label><br/>
                <input type="text" onChange={(e)=>setskill2(e.target.value)} value={skill2}/>
            </p>
            <p>
                <label>skill3</label><br/>
                <input type="text" onChange={(e)=>setskill3(e.target.value)} value={skill3}/>
            </p>
            
            <input id="edit" type="submit" />
        </form>
       
        </>
    )
}

export default Update;