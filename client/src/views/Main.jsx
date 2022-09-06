import { useState ,useEffect} from "react"
import Home from '../components/Home'
import Show from '../components/Show'
import New from '../components/New'
import Edit from './Edit'
import axios from 'axios'

import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";


const Main =()=>{
    const [pets,setpets]=useState([])
  
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/pet")
        .then(res => setpets(res.data))
        .catch(err => console.error(err))
    },[])
    
    
    return(
        <>
         <BrowserRouter>
        <Switch>
            <Route path="/pet">
            <Home pets={pets}/>
           
            </Route>
            <Route path="/add">
            <New />
           
            </Route>
            <Route path="/edit/:id">
            <Edit />
           
            </Route>
            
            <Route path="/show/:id">
            <Show  />
            </Route>
           
          
        </Switch>
        </BrowserRouter>
    
        </>
    )
}
export default Main;