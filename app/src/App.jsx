import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/home'
import Cursos from './Pages/cursos'
import Habilidades from './Pages/habilidades'

import HomeProjetos from './Pages/projetos/ProjetosHome'
import Doceria from './Pages/projetos/Doceria'
import Hotel from './Pages/projetos/Hotel'
import WebCurriculo from './Pages/projetos/Webcurriculo'
import Portifolio from './Pages/projetos/portifolio'



function App() {


  return (
    <>
     <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/projetos' element={<HomeProjetos />}></Route>
                    <Route path='/doceria' element={<Doceria />}></Route>
                    <Route path='/hotel' element={<Hotel />}></Route>
                    <Route path='/webcurriculo' element={<WebCurriculo />}></Route>
                    <Route path='/portifolio' element={<Portifolio />}></Route>
                    <Route path='/cursos' element={<Cursos />}></Route>
                    <Route path='/habilidades' element={<Habilidades />}></Route>
                </Routes>
            </BrowserRouter>

    </>
  )
}

export default App
