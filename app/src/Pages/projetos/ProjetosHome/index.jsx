import './projetos.css'
import '../../../App.css'
import Perfil from '../../../componentes/perfil'
import Navbar from '../../../componentes/navbar'
import { Link } from 'react-router-dom'

function projetosHome() {
    return (
        <>
            <div className='containergeral'>

                <Perfil />

                <div className='sessoes'>
                    <nav>
                        <Navbar />
                    </nav>
                    <section>
                        
                            <div className='imgProjeto doceria'>
                              <Link to="/Doceria"><span>Ver mais</span></Link>
                            </div>
                            <div className='imgProjeto hotel'>
                                 <Link to="/Hotel"> <span>Ver mais</span></Link>
                            </div>
                            <div className='imgProjeto webcurriculo'>
                               <Link to="/Webcurriculo"> <span>Ver mais</span></Link>
                            </div>

                            <div className='imgProjeto portifolio'>
                               <Link to="/Portifolio"> <span>Ver mais</span></Link>
                            </div>
                        
                    </section>

                </div>

            </div>
        </>
    )
}
export default projetosHome