import './Webcurriculo.css'
import Perfil from '../../../componentes/perfil'
import Navbar from '../../../componentes/navbar'

function Webcurriculo() {

    const infoprojeto ={
        nomeprojeto: 'WEB Curriculo',
        descrisao: 'Feito com tecnicas de HTML5, CSS3, Flex, React, vite, dentre outras pronta para adição de recursos backend,',
      };
    return (
        <>
            <div className='containergeral'>

                <Perfil />

                <div className='sessoes'>
                    <nav>
                        <Navbar />
                    </nav>
                    <section>


                    <div className='imgWebC '></div>
                            <div className='boxInfo'>
                            <h2>{infoprojeto.nomeprojeto}</h2>
                            <span>{infoprojeto.descrisao}</span>
                            <div className='tec'>
                                <img className='imgtec html'></img>
                                <img className='imgtec css'></img>
                                <img className='imgtec vite'></img>
                                <img className='imgtec react'></img>
                                </div>
                                <h3><a href='https://github.com/marcelquin/webcurriculo_react' target='_blank'>GIT</a></h3>
                            </div>


                    </section>
                </div>
            </div>
        </>
    )
}
export default Webcurriculo