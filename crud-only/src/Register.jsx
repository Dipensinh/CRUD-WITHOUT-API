import React, { useState } from 'react';

const Register = () => {

    const [name , setName] = useState("")
    const [alldata , setAlldata] = useState([])
    const [show , setShow] = useState(false)
    const [edittext ,setEdittext] = useState()    

    const adddata = ()=>{
        setName("")
        console.log("adddata");
        console.log(name);
        setAlldata((newdata)=>[...newdata , name])
    }

    const deletedata =(i)=>{
        console.log("deletedtata" , i);
        alldata.splice(i ,1)
        setAlldata([...alldata])
    }

    const editdata =(i)=>{
        setName(alldata[i])
        setShow(true)
        setEdittext(i)
    }
    const updatedata =() =>{
        console.log(edittext);
        alldata.splice(edittext,1,name)
        setAlldata([...alldata])
 
        
    }
    console.log(alldata);
    return ( 
        <>
        <h1>REGISTER</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
       {! show ? <button onClick={adddata}>Adddata</button> :
        <button onClick={updatedata}>Updatedata</button>}
        {            
            alldata.map((value , i)=>
            <>
            <h1>{value}</h1>

            <button onClick={()=>editdata(i)}>Edit</button>
            <button onClick={()=>deletedata(i)}>Delete</button>
            </>
            )              
            
        }
        </>
     );
}
 
export default Register;