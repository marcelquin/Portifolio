import './habilidades.css'
import '../../App.css'
import Navbar from '../../componentes/navbar'
import Perfil from '../../componentes/perfil'

function Habilidades() {
    /*
        <img className='html'></img>
                <img className='css'></img>
                <img className='react'></img>
                <img className='vite'></img>
                <img className='js'></img>
                <img className='ps'></img>
    */
    return (
        <>
            <div className='containergeral'>

                <Perfil />

                <div className='sessoes'>
                    <nav>
                        <Navbar />
                    </nav>
                    <section>
                        
                            <div className='hbox html'></div>
                            <div className='hbox css'></div>
                            <div className='hbox react'></div>
                            <div className='hbox vite'></div>
                            <div className='hbox js'></div>
                            <div className='hbox ps'></div>
                            <div className='hbox git'></div>
                    </section>


                </div>
            </div>
        </>
    )
}
export default Habilidades