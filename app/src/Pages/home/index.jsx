import './home.css'
import '../../App.css'
import Navbar from '../../componentes/navbar'
import Perfil from '../../componentes/perfil'

/*
<h1>{infoPessoal.nome}</h1>
                    <h2>{infoPessoal.idade}</h2>
                    <p className='info'>({infoPessoal.prefone}){infoPessoal.fone}</p>
                    <p className='info'> {infoPessoal.email}</p>
                    <div className='redessociais'>
                     <a href='https://www.facebook.com/ursoquinteiro' target='_blank'><div className='boxSocial facebook'></div></a>
                      <div className='boxSocial instagram'></div>
                      <div className='boxSocial linkedin'></div>
                     <a href='https://github.com/marcelquin>' target='_blank'> <div className='boxSocial git'></div></a>

*/
function Home() {

  const infoPessoal = {
    nome: 'Marcel Higor Quinteiro Araujo',
    idade: 35,
    prefone: 65,
    fone: '99672-5190',
    email: 'quinteiromarcel@gmail.com',
  };

  return (
    <>
      <div className='containergeral'>

        <Perfil />

        <div className='sessoes'>

          <div className='boxSessao'>
            <div className='box'>
              <div className='boxInfo'>
                <h1>{infoPessoal.nome}</h1>
                <h1>Idade: {infoPessoal.idade}</h1>
                <p>({infoPessoal.prefone}){infoPessoal.fone}</p>
                <p>{infoPessoal.email}</p>
              
              <div className='redessociais'>
                     <a href='https://www.facebook.com/ursoquinteiro' target='_blank'><div className='boxSocial facebook'></div></a>
                      <div className='boxSocial instagram'></div>
                      <div className='boxSocial linkedin'></div>
                     <a href='https://github.com/marcelquin>' target='_blank'> <div className='boxSocial git'></div></a>
              </div>

              </div>

            </div>
          </div>

        </div>

        <nav>
          <Navbar />
        </nav>

      </div>



        
        </>
    )
}
export default Home