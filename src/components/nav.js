import {Link} from "react-router-dom";
function Nav(){
    return(
        <nav class="navbar bg-warning">
            <Link style={{fontFamily:"nosifer"}} to="/" class="navbar-brand">CRUD OPERATION</Link>
            <div class="nav">
                <Link  style={{fontFamily:"Agbalumo"}}to="/create-student" class="nav-link">Create Student</Link>
                <Link style={{fontFamily:"Agbalumo"}}to="/student-list" class="nav-link">Student List</Link>
            </div>
        </nav>
    )
}
export default Nav;