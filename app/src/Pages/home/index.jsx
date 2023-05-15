import './home.css'
import '../../App.css'
import Navbar from '../../componentes/navbar'

function Home(){

  const infoPessoal = {
    nome: 'Marcel Higor Quinteiro Araujo',
    idade: 35,
    prefone: 65,
    fone: '99672-5190',
    email:  'quinteiromarcel@gmail.com',
  };

    return(
        <>
              <div className='containergeral'>
          
          <div className='imgperfil'>
            
          </div>
          
          <div className='sessoes'>

            <div className='boxSessao'>
            <div className='box'>
                  <div className='boxInfo'>
                    <h1>{infoPessoal.nome}</h1>
                    <h2>{infoPessoal.idade}</h2>
                    <p className='info'>({infoPessoal.prefone}){infoPessoal.fone}</p>
                    <p className='info'> {infoPessoal.email}</p>
                    <div className='redessociais'>
                      <div className='boxSocial facebook'></div>
                      <div className='boxSocial instagram'></div>
                      <div className='boxSocial linkedin'></div>
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