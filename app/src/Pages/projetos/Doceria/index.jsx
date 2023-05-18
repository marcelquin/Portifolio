import './doceria.css'
import Perfil from '../../../componentes/perfil'
import Navbar from '../../../componentes/navbar'


function Doceria() {

    const infoprojeto ={
        nomeprojeto: 'DOCERIA',
        descrisao: 'Feito com tecnicas de HTML5, CSS3, Flex, apto para futuras atualizações backend.',
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


                        <div className='img'></div>
                        <div className='boxInfo'>
                            <h2>{infoprojeto.nomeprojeto}</h2>
                            <span>{infoprojeto.descrisao}</span>
                            <div className='tec'>
                                <img className='imgtec html'></img>
                                <img className='imgtec css'></img>
                                <img className='imgtec vite'></img>
                            </div>
                        </div>


                    </section>
                </div>
            </div>
        </>
    )
}
export default Doceria