
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
function App() {


  return (
    <>
    <div>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App
