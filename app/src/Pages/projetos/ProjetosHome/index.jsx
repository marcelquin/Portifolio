import './projetos.css'
import '../../../App.css'
import Perfil from '../../../componentes/perfil'
import Navbar from '../../../componentes/navbar'


function projetosHome() {
    return (
        <>
            <div className='containergeral'>

                <Perfil />

                <div className='sessoes'>

                    <div className='boxSessao'>
                        <div className='box'>
                            <div className='imgProjeto'><span>Ver mais</span></div>
                            <div className='imgProjeto'><span>Ver mais</span></div>
                            <div className='imgProjeto'><span>Ver mais</span></div>
                            <div className='imgProjeto'><span>Ver mais</span></div>
                        </div>
                    </div>
                    <nav>
                        <Navbar />
                    </nav>

                </div>

            </div>
        </>
    )
}
export default projetosHome