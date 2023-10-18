
import './App.css'
import Footer from './Components/Footer'
import imagenLogo from './Components/Images/Captura_de_pantalla_2023-09-13_151842-removebg-preview.png'
function App() {


  return (
    <>
    <div>
      <h1>Nombre del proyecto</h1>
      <img src={imagenLogo} alt="imagen_logo" />
    </div>
    <div>
      <h2>Aca va el navbar</h2>
    </div>
    <div>Aca van las promociones</div>
    <div>
      <h3>aca va el contenido</h3>
      <p>soy la carta</p>
      <span>titulos x</span>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App
