import '../../App.css'
import './cursos.css'
import Perfil from '../../componentes/perfil'
import Navbar from '../../componentes/navbar'
/*
 <div className='bloco'>
                            <h3>UDEMY</h3>
                            <h3>HTML E CSS: TECNICAS AVANÇADAS</h3>
                            <h3>Ano:</h3>
                            <a href='#' target='_blank'>Certificado</a>
                        </div>
*/
function Cursos(){
    return(
        <>
            <div className='containergeral'>

                <Perfil />

                <div className='sessoes'>

                    <div className='boxSessao'>

                        <details>
                            <summary>UDEMY</summary>
                            <div className='cursos'>
                                <div className='bloco'>
                                <h3>HTML5 e CSS3: Tecnicas avançadas</h3>
                                <h3>Ano 2023</h3>
                                <a href='#' target='_blank'>Certificado</a>
                                </div>

                                <div className='bloco'>
                                <h3>HTML5 e CSS3: Tecnicas avançadas</h3>
                                <h3>Ano 2023</h3>
                                <a href='#' target='_blank'>Certificado</a>
                                </div>

                                <div className='bloco'>
                                <h3>HTML5 e CSS3: Tecnicas avançadas</h3>
                                <h3>Ano 2023</h3>
                                <a href='#' target='_blank'>Certificado</a>
                                </div>

                                <div className='bloco'>
                                <h3>HTML5 e CSS3: Tecnicas avançadas</h3>
                                <h3>Ano 2023</h3>
                                <a href='#' target='_blank'>Certificado</a>
                                </div>
                            </div>
                        </details>

                        <details>
                            <summary>UDEMY</summary>
                            <div className='cursos'>
                                <div className='bloco'>
                                <h3>HTML5 e CSS3: Tecnicas avançadas</h3>
                                <h3>Ano 2023</h3>
                                <a href='#' target='_blank'>Certificado</a>
                                </div>

                                <div className='bloco'>
                                <h3>HTML5 e CSS3: Tecnicas avançadas</h3>
                                <h3>Ano 2023</h3>
                                <a href='#' target='_blank'>Certificado</a>
                                </div>

                                <div className='bloco'>
                                <h3>HTML5 e CSS3: Tecnicas avançadas</h3>
                                <h3>Ano 2023</h3>
                                <a href='#' target='_blank'>Certificado</a>
                                </div>

                                <div className='bloco'>
                                <h3>HTML5 e CSS3: Tecnicas avançadas</h3>
                                <h3>Ano 2023</h3>
                                <a href='#' target='_blank'>Certificado</a>
                                </div>
                            </div>
                        </details>

                     

                    </div>

                    <nav>
                        <Navbar />
                    </nav>

                </div>

            </div>
        </>
    )
}
export default Cursos