import './home.css'
import '../../App.css'
import Navbar from '../../componentes/navbar'

function Home(){
    return(
        <>
              <div className='containergeral'>
          
          <div className='imgperfil'>
            
          </div>
          
          <div className='sessoes'>

            <div className='boxSessao'>
            <div className='box'>
                  <div className='boxInfo'>
                    <h1>NOME:</h1>
                    <h2>IDADE:</h2>
                    <p className='info'>Fone:</p>
                    <p className='info'> Email:</p>
                    <div className='redessociais'>
                      <div className='boxSocial facebook'></div>
                      <div className='boxSocial instagram'></div>
                      <div className='boxSocial linkedin'></div>
                      <div className='boxSocial git'></div>
                      <div className='boxSocial git'></div>
                    </div>
                  </div>
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
export default Home