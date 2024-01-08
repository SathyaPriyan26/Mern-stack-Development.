import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "@fontsource/kanit"; 
import "@fontsource/jost"; 
import Naviga from './pages/Naviga';
import Home from './pages/Home';
import Search from './pages/Search';
import Guide from './pages/Guide';
import Blog from './pages/Blog';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={< Naviga/>}>
    <Route index element={<Home />} />
    <Route path='/Search' element={<Search/>}/>
    <Route path='/Guide' element={<Guide/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
      {/* <Naviga/> */}
      <Home/>
      <Search/>
      <Guide/>
      <Blog/>
      
    </>
  )
}

export default App
