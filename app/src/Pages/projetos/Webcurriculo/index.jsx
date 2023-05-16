import './Webcurriculo.css'


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

                        <div className='box'>
                            <img></img>
                            <div className='boxInfo'>
                                <h2>Doceria</h2>
                                <span>Descrição</span>
                                <div className='tec'>
                                    <img className='imgtec'></img>
                                    <img className='imgtec'></img>
                                    <img className='imgtec'></img>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}
export default Webcurriculo