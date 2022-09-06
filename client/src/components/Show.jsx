import React from 'react'
import axios from 'axios';

import { useEffect,useState} from "react";

import { useParams } from "react-router-dom";

const Display =(props)=>{

    const [person, setPerson] = useState({})
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' +id)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, []);
    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/pet/delete/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }
       
    return(
        <>
         <h1>Pet Shelter</h1>
         <a href="/pet">back to home </a>
         <button className="del" onClick={()=>{handleDelete(person._id)}}>Adopt garfiled</button>
     
            <h2>deteiles about:{person.name}</h2>
        <div className="dis">
        <h2>type:{person.type}</h2>
        <h2>description:{person.desc}</h2>
        <h2>skills:{person.skill1}{person.skill2}{person.skill3}</h2>
     
       
        
        </div>
        
        </>
        
    )
}


export default Display;