import '../../App.css'
import './cursos.css'
import Perfil from '../../componentes/perfil'
import Navbar from '../../componentes/navbar'




function Cursos() {

    const instFID ={
        inst: 'FID', 
        curso: 'Baicharelado em  Sistema de Informação', //1
        curso2: 'III mostra Cientifica',
        curso3: 'Marketing pessoal',
        curso4: 'XVII SEFOL',
        curso5: 'EXPOFID 2011',
        ano: 2013,
        ano2: 2011,
      };
      
      const inscurso24={
        inst: 'CURSO24H',
        curso: 'Segurança na Internet',
        curso2: 'Redes e Noções de Hardwar',
        ano: 2011,
      };
      
      const insudemy={
        inst: 'UDEMY',
        curso: 'Java Completo Programaão Orinetada a Objetos + projetos', //2
        curso2: 'Spring Boot & MVC com Thymeleaf', //3
        curso3: 'HTML5 e CSS3 : Tecnicas Avançadas<', //4
        curso4: 'JavaScript e TypeScript do básico ao avançado', // 5
        ano: 2023,
      };
      const instiped={
        inst: 'IPED',
        curso: 'CURSO DE PHP + MySQL ', //6
        curso2: 'CURSO DE HTML', //7
        ano: 2011
      };
      
      const instbrava={
        inst: 'BRAVA CURSOS',
        curso: 'CURSO DE HTML5', //8
        ano: 2012,
      };
      
      const instsoftblue={
        inst: 'SOFTBLUE',
        curso: 'CURSO DE SQL COMPLETO', //9
        ano: 2011, 
      };
      
      
      const instensinon={
        inst: 'ensino nacional',
        curso: 'CURSO DE HTML', //10
        curso2: 'CURSO DE PHO', //11
        curso3: 'Curso de administração de tempo',
        curso4: 'curso de informatica na educação',
        ano: 2011, 
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

                       

                            <div className='bloco fid'>
                            <h3>{instFID.inst}</h3>
                            <h3>{instFID.curso}</h3>
                            <h3>Ano:{instFID.ano}</h3>
                            <a href='' target='_blank'>Certificado</a>
                            </div>
                            
                            <div className='bloco udemy1'>
                            <h3>{insudemy.inst}</h3>
                            <h3>{insudemy.curso3}</h3>
                            <h3>Ano:{insudemy.ano} </h3>
                            <a href='#' target='_blank'>Certificado</a>
                            </div>

                            <div className='bloco udemy2'>
                            <h3>{insudemy.inst}</h3>
                            <h3>{insudemy.curso4}</h3>
                            <h3>Ano:{insudemy.ano} </h3>
                            <a href='#' target='_blank'>Certificado</a>
                            </div>

                            <div className='bloco udemy3'>
                            <h3>{insudemy.inst}</h3>
                            <h3>{insudemy.curso}</h3>
                            <h3>Ano:{insudemy.ano} </h3>
                            <a href='#' target='_blank'>Certificado</a>
                            </div>

                            <div className='bloco udemy4'>
                            <h3>{insudemy.inst}</h3>
                            <h3>{insudemy.curso2}</h3>
                            <h3>Ano:{insudemy.ano} </h3>
                            <a href='#' target='_blank'>Certificado</a>
                            </div>                         

                            <div className='bloco iped1'>
                            <h3>{instiped.inst}</h3>
                            <h3>{instiped.curso}</h3>
                            <h3>Ano:{instiped.ano}</h3>
                            <a href='#' target='_blank'>Certificado</a>
                            </div>

                            <div className='bloco iped2'>
                            <h3>{instiped.inst}</h3>
                            <h3>{instiped.curso2}</h3>
                            <h3>Ano:{instiped.ano}</h3>
                            <a href='#' target='_blank'>Certificado</a>
                            </div>

                            <div className='bloco brava'>
                            <h3>{instbrava.inst}</h3>
                            <h3>{instbrava.curso}</h3>
                            <h3>Ano:{instbrava.ano}</h3>
                            <a href='#' target='_blank'>Certificado</a>
                            </div>

                            <div className='bloco soft'>
                            <h3>{instsoftblue.inst}</h3>
                            <h3>{instsoftblue.curso}</h3>
                            <h3>Ano:{instsoftblue.ano}</h3>
                            <a href='#' target='_blank'>Certificado</a>
                            </div>

                            <div className='bloco ensinon1'>
                            <h3>{instensinon.inst}</h3>
                            <h3>{instensinon.curso}</h3>
                            <h3>Ano:{instensinon.ano}</h3>
                            <a href='#' target='_blank'>Certificado</a>
                            </div>

                            <div className='bloco ensinon2'>
                            <h3>{instensinon.inst}</h3>
                            <h3>{instensinon.curso2}</h3>
                            <h3>Ano:{instensinon.ano}</h3>
                            <a href='#' target='_blank'>Certificado</a>
                            </div>


                            

                            
                        

                    </section>

                </div>

            </div>
        </>
    )
}
export default Cursos