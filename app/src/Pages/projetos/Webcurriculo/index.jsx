import './Webcurriculo.css'
import Perfil from '../../../componentes/perfil'
import Navbar from '../../../componentes/navbar'

function Webcurriculo() {
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
                                <h2>Doceria</h2>
                                <span>Descrição</span>
                                <div className='tec'>
                                    <img className='imgtec'></img>
                                    <img className='imgtec'></img>
                                    <img className='imgtec'></img>
                                </div>
                            </div>


                    </section>
                </div>
            </div>
        </>
    )
}
export default Webcurriculo