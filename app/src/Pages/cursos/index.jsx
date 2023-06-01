import '../../App.css'
import './cursos.css'
import Perfil from '../../componentes/perfil'
import Navbar from '../../componentes/navbar'




function Cursos() {

    const instFID ={
        inst: 'FID', 
        curso: 'Baicharelado em  Sistema de Informação', //1
        linkcurso1: 'https://drive.google.com/file/d/1Khmxis7f7lkyyuDWl4FBQZfcZGJ781ou/view?usp=share_link', //link drive diploma
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
        linkcursou1: 'https://drive.google.com/file/d/10YYNVCXbKe_MZlt8_R25Ym8YXInP1rnm/view?usp=share_link',
        curso2: 'Spring Boot & MVC com Thymeleaf', //3
        linkcursou2: 'https://drive.google.com/file/d/1ZBWF_0QY5NJE0qORK02EtfwahUCB5L8w/view?usp=share_link',
        curso3: 'HTML5 e CSS3 : Tecnicas Avançadas<', //4
        linkcursou3: ' https://drive.google.com/file/d/1p96IV4GtOvrge4s8wGO1G9dFlIKIZlZb/view?usp=share_link',
        curso4: 'JavaScript e TypeScript do básico ao avançado', // 5
        linkcursou4: '',
        ano: 2023,
      };
      const instiped={
        inst: 'IPED',
        curso: 'CURSO DE PHP + MySQL ', //6
        linkcurso1:'https://drive.google.com/file/d/1022nFlT5vsmPk4TDbpHsCsqdwlTEJLsG/view?usp=share_link',
        curso2: 'CURSO DE HTML', //7
        linkcurso2:'https://drive.google.com/file/d/1p51dpc0onCLOnZBD6eDIlaFiWUF4VQhv/view?usp=share_link',
        ano: 2011
      };
      
      const instbrava={
        inst: 'BRAVA CURSOS',
        curso: 'CURSO DE HTML5', //8
        linkcurso1:'https://drive.google.com/file/d/1305Y0V9y18-LXi9C1GISwONrQNPoTQb6/view?usp=sharing',
        ano: 2012,
      };
      
      const instsoftblue={
        inst: 'SOFTBLUE',
        curso: 'CURSO DE SQL COMPLETO', //9
        linkcurso1:' https://drive.google.com/file/d/1piPs4DFBc8NlCLxwXPGMCpn7ca_IPbhn/view?usp=share_link',
        ano: 2011, 
      };
      
      
      const instensinon={
        inst: 'ensino nacional',
        curso: 'CURSO DE HTML', //10
        linkcurso1:'https://drive.google.com/file/d/1PO33EN2-NZjgEWru8LrjUihIm_iLZsF3/view?usp=share_link',
        curso2: 'CURSO DE PHP', //11
        linkcurso2:'https://drive.google.com/file/d/1Cmbnhfk6V8kOBJAaVzYKf-8Wd-dMVZ_m/view?usp=share_link',
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
                            <a href='https://drive.google.com/file/d/1ZPHRZFHs4G9MrJPf94ruMzPI_ClXGJcs/view?usp=sharing' target='_blank' className='faculdade'>Diploma</a>
                            </div>
                            
                            <div className='bloco udemy1'>
                            <h3>{insudemy.inst}</h3>
                            <h3>{insudemy.curso3}</h3>
                            <h3>Ano:{insudemy.ano} </h3>
                            <a href='https://drive.google.com/file/d/1p96IV4GtOvrge4s8wGO1G9dFlIKIZlZb/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
                            </div>

                            <div className='bloco udemy2'>
                            <h3>{insudemy.inst}</h3>
                            <h3>{insudemy.curso4}</h3>
                            <h3>Ano:{insudemy.ano} </h3>
                            <a href='' target='_blank' className='faculdade'>Certificado</a>
                            </div>

                            <div className='bloco udemy3'>
                            <h3>{insudemy.inst}</h3>
                            <h3>{insudemy.curso}</h3>
                            <h3>Ano:{insudemy.ano} </h3> 
                            <a href='https://drive.google.com/file/d/10YYNVCXbKe_MZlt8_R25Ym8YXInP1rnm/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
                            </div>

                            <div className='bloco udemy4'>
                            <h3>{insudemy.inst}</h3>
                            <h3>{insudemy.curso2}</h3>
                            <h3>Ano:{insudemy.ano} </h3>
                            <a href='https://drive.google.com/file/d/1ZBWF_0QY5NJE0qORK02EtfwahUCB5L8w/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
                            </div>                         

                            <div className='bloco iped1'>
                            <h3>{instiped.inst}</h3>
                            <h3>{instiped.curso}</h3>
                            <h3>Ano:{instiped.ano}</h3>
                            <a href='https://drive.google.com/file/d/1fFVUMWIbxqUJQntgOt6OUoVFHaaAYb1X/view?usp=sharing' target='_blank'>Certificado</a>
                            </div>

                            <div className='bloco iped2'>
                            <h3>{instiped.inst}</h3>
                            <h3>{instiped.curso2}</h3>
                            <h3>Ano:{instiped.ano}</h3>
                            <a href='https://drive.google.com/file/d/1bmLQ3SaFQFpWlrV19Joa5eZNh5KnoL8T/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
                            </div>

                            <div className='bloco brava'>
                            <h3>{instbrava.inst}</h3>
                            <h3>{instbrava.curso}</h3>
                            <h3>Ano:{instbrava.ano}</h3>
                            <a href='https://drive.google.com/file/d/15lIosh1qeZog4I_DXMz2JMXAAOguwlmA/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
                            </div>

                            <div className='bloco soft'>
                            <h3>{instsoftblue.inst}</h3>
                            <h3>{instsoftblue.curso}</h3>
                            <h3>Ano:{instsoftblue.ano}</h3>
                            <a href='https://drive.google.com/file/d/1qzFb3rDcpisdB8iJQYapKuSAzqLlmI2F/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
                            </div>

                            <div className='bloco ensinon1'>
                            <h3>{instensinon.inst}</h3>
                            <h3>{instensinon.curso}</h3>
                            <h3>Ano:{instensinon.ano}</h3>
                            <a href='https://drive.google.com/file/d/15-AsgMLEolIKpHmraCm85UigB63oQGv0/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
                            </div>

                            <div className='bloco ensinon2'>
                            <h3>{instensinon.inst}</h3>
                            <h3>{instensinon.curso2}</h3>
                            <h3>Ano:{instensinon.ano}</h3>
                            <a href='https://drive.google.com/file/d/13fFRouutFOlLrbeQzE0wEnuEMOFP752s/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
                            </div>


                            

                            
                        

                    </section>

                </div>

            </div>
        </>
    )
}
export default Cursos