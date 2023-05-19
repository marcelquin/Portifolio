import {Link} from "react-router-dom"
import './navbar.css'
import Home from "../../Pages/home"


function Navbar() {

    return(
        <>
            <Link to="/"><span className="itemmenu">Home</span></Link>
            
            <Link to="/cursos"> <span className="itemmenu">Cursos</span> </Link>
            <Link to="/habilidades"><span className="itemmenu">Habilidades</span></Link>
            <Link to="/projetos"><span className="itemmenu">Projetos</span></Link>
                 
        </>

    )
}
export default Navbar