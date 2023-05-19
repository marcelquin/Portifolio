import './Hotel.css'
import Perfil from '../../../componentes/perfil'
import Navbar from '../../../componentes/navbar'

function Hotel() {

    const infoprojeto ={
        nomeprojeto: 'SITE COMERCIAL',
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


                        <div className='imgSiteC'></div>
                        <div className='boxInfo'>
                        <h2>{infoprojeto.nomeprojeto}</h2>
                            <span>{infoprojeto.descrisao}</span>
                            <div className='tec'>
                                <img className='imgtec html'></img>
                                <img className='imgtec css'></img>
                                <img className='imgtec vite'></img>
                            </div>
                            <h3><a href='https://github.com/marcelquin/site_hotel' target='_blank'>GIT</a></h3>
                            
                        </div>


                    </section>
                </div>
            </div>
        </>
    )
}
export default Hotel