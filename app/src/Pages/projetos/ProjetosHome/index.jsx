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
                              <Link to="/Doceria"><span className='verMais'>Ver mais</span></Link>
                            </div>
                            <div className='imgProjeto siteComercial'>
                                 <Link to="/Hotel"> <span className='verMais'>Ver mais</span></Link>
                            </div>
                            <div className='imgProjeto webcurriculo'>
                               <Link to="/Webcurriculo"> <span className='verMais'>Ver mais</span></Link>
                            </div>

                            <div className='imgProjeto portifolio'>
                               <Link to="/Portifolio"> <span className='verMais'>Ver mais</span></Link>
                            </div>
                        
                    </section>

                </div>

            </div>
        </>
    )
}
export default projetosHome