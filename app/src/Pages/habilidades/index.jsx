import './habilidades.css'
import '../../App.css'
import Navbar from '../../componentes/navbar'
import Perfil from '../../componentes/perfil'

function Habilidades() {

    return(
    <>

<div className='containergeral'>
          
          <Perfil />
      
      <div className='sessoes'>

        <div className='box'>
            <img className='html'></img>
            <img className='css'></img>
            <img className='react'></img>
            <img className='vite'></img>
            <img className='js'></img>
            <img className='ps'></img>
        </div>

        <nav>
              <Navbar />
        </nav>  
              
            </div>

      </div>
    </>
    )
}
export default Habilidades