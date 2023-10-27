import { useState,useEffect } from "react";

function StudentForm(props){
    const [name,setname]=useState(props.nameValue);
    const[email,setemail]=useState(props.emailValue);
    const[rollno,setrollno]=useState(props.rollnoValue);
    const arr=[name,email,rollno];
    useEffect(()=>{
        setname(props.nameValue);
        setemail(props.emailValue);
        setrollno(props.rollnoValue);
    },[props.nameValue,props.emailValue,props.rollnoValue]);
    const handleClick=()=>{
        props.getState(arr);
    }
return (
    <div style={{maxWidth:"40%",margin:"0px auto"}} >
 <input defaultValue={props.nameValue} onChange={(event)=>setname(event.target.value)} class="form-control my-2" placeholder="Enter ur name"/>
 <input defaultValue={props.emailValue}onChange={(event)=>setemail(event.target.value)} class="form-control my-2" placeholder="Enter ur mail"/>
 <input defaultValue={props.rollnoValue} onChange={(event)=>setrollno(event.target.value)} class="form-control my-2" placeholder="Enter ur roll"/>
 <button onClick={handleClick} class="btn btn-success" type="submit">{props.children}</button>
    </div>
)
}
export default StudentForm;