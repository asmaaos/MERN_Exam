import {Link} from "react-router-dom";
import "../App.css";

const Home =(props)=>{
 
    return(
        <>
        <div className="one">
        <h1>Pet Shelter</h1>
       
        <p>these pets are looking for a good home </p>
         <a href="/add">Add a pet to the shelter </a>

        </div>
        <div>

        <table>
                    <thead>
                        <tr>
                            <th>Pet Name</th>
                            <th>Pet Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.pets.map((asmaa,i)=>
                    
                        <tr key={i}>
                            <td>{asmaa.name}</td>
                            <td>{asmaa.type}</td>
                            <td>
                            <Link to={"/show/"+asmaa._id}>detiles</Link>|
                            <Link to={"/edit/"+asmaa._id}>Edit</Link>
                              
                            </td>
                        </tr>
                    )}
                    
                    </tbody>
                </table>
        </div>
        </>
    )
}
export default Home;