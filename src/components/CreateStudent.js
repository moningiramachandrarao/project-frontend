import{useState} from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";
function CreateStudent(){
    const[arr,setArr]=useState([]);
    const getState=(childdata)=>{
        setArr(childdata);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const data={name:arr[0],email:arr[1],rollno:arr[2]};
        Axios.post("https://crud-deployment-backend-1.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status===200){
                alert("record added");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }
    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
            nameValue=""
            emailValue=""
            rollnoValue="">
            Create Student
           </ StudentForm>
        </form>
    )
}
export default CreateStudent;