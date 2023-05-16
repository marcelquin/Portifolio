import {Link} from "react-router-dom"
import './navbar.css'
import Home from "../../Pages/home"


function Navbar() {

    return(
        <>
            <Link to="/"><span>Home</span></Link>
            
            <Link to="/cursos"> <span>Cursos</span> </Link>
            <Link to="/habilidades"><span>Habilidades</span></Link>
            <Link to="/projetos"><span>Projetos</span></Link>
                 
        </>

    )
}
export default Navbar