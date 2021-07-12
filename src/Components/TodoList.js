import React from 'react';
import { useState } from 'react';

function TodoList() {

    const [user,setuser]=useState({name:'',task:''});
    
    
    const [list,setlist]=useState([]);


    const handleChange = e => {
        e.persist();
       setuser(prevuser => ({ ...prevuser, [e.target.name]: e.target.value }));
       
    }
   
       const additem=(e)=>{
        e.preventDefault();

           setlist( [...list,user] );
           
           setuser({name:'',task:''});
          
       }         
                
                
       const deleteitem=(id)=>{
         
          
       const newlist=[...list];
       newlist.splice(id,1);
       setlist(newlist);


       }
           
   
    return (
        <div>
         <h1>Todo List</h1>
            <div className="">


            <form>
                <input type="text"  value={user.name} name="name" onChange={handleChange}/>

               <input type="text"  value={user.task} name="task" onChange={handleChange}
            /> 
            

                <span><button onClick={additem}>Add Element</button></span>
               
            </form>
            <div>
                <ul>
               { list.map((elem,id)=>{
                    return (
                        <div key={id} className="elements">
                        <li>{elem.name}</li>
                        <li>{elem.task}</li>
                    <span><button onClick={()=>{deleteitem(id)}}>Delete</button></span>     
                    </div>    
                    )
                })
            }
                </ul>
            </div>
            </div>
        </div>
    )
        }
    
export default TodoList
