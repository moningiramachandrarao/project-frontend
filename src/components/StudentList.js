import Axios from "axios";
import {useState,useEffect} from "react";
import StudentListRow from "./StudentListRow";
function StudentList(){
    const[arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("https://crud-deployment-backend-1.onrender.com/studentRoute/")
        .then((res)=>{
            if(res.status===200){
                setArr(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[]);
const ListItems=()=>{
    return arr.map((val,ind)=>{
        return <StudentListRow obj={val}/>
    })
}
    return (
        <table style={{maxWidth:"95%",margin:"50px auto"}} class="table table-borderd table-striped table-dark text-light ">
            <thead>
                <tr>
                    <th >Name</th>
                    <th >Email</th>
                    <th  >rollno</th>
                    <th >Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
 

      {ListItems()}
            </tbody>
        </table>
    )
}
export default StudentList;