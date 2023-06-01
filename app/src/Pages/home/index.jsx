import './home.css'
import '../../App.css'
import Navbar from '../../componentes/navbar'
import Perfil from '../../componentes/perfil'


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
          <nav>
            <Navbar />
          </nav>
          <section>
          
              
                <div className='boxInfo'>
                <h1>{infoPessoal.nome}</h1>
                <h1>{infoPessoal.idade} Anos</h1>
                
               </div>
               <div className='contato'>
                  <p><i class="bi bi-envelope-check"></i>({infoPessoal.prefone}){infoPessoal.fone}</p>
                  <p>{infoPessoal.email}</p>
                </div>
                <div className='redessociais'>
                <a href='https://www.facebook.com/ursoquinteiro' target='_blank'><div className='boxSocial facebook'></div></a>
               <a href='https://instagram.com/marcelquinteiro9?igshid=MzNlNGNkZWQ4Mg==' target='_blank'> <div className='boxSocial instagram'></div></a>
               <a href='https://www.linkedin.com/in/marcel-quinteiro-b92111256/' target='_blank'><div className='boxSocial linkedin'></div></a>
                <a href='https://github.com/marcelquin' target='_blank'> <div className='boxSocial git'></div></a>
                </div>

          </section>

        </div>
      </div>






    </>
  )
}
export default Home