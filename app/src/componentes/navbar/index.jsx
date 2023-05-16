import {Link} from "react-router-dom"
import './navbar.css'
import Home from "../../Pages/home"


function Navbar() {

    return(
        <>
            <p> <Link to="/">Home</Link></p>
            
            <p><Link to="/cursos">Cursos</Link></p>
            <p><Link to="/habilidades">Habilidades</Link></p>
            <p><Link to="/projetos">Projetos</Link></p>
                 
        </>

    )
}
export default Navbar