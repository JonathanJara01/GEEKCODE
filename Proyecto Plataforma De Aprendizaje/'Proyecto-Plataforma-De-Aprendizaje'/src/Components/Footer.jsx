import React from 'react'
import LogoFooter from './Images/Captura_de_pantalla_2023-09-13_151842-removebg-preview.png'

const Footer = () => {
  return (
    <div className="container my-3">
    <div className="row align-items-center animate__animated animate__rubberBand">
            <footer className="py-3 my-4 col-sm-12 col-md-6 col-lg-6 col-xl-12">
            <div className="col-sm-12 col-md-9 col-lg-9 col-xl-3 mt-3">
            <img src={LogoFooter} className="img-fluid" alt="imagenlogofooter" />
            </div>
                <ul className="nav justify-content-center">
                    <li className="nav-item"><a href="#!" className="nav-link">Acerca De Nosotros</a></li>
                    <li className="nav-item"><a href="#!" className="nav-link">Facebook</a></li>
                    <li className="nav-item"><a href="#!" className="nav-link">Instagram</a></li>
                    <li className="nav-item"><a href="#!" className="nav-link">Whatsapp</a></li>
                </ul>
                <p className="text-center text-muted">© 2023 Jonathan Jaramillo Zapata & Alexander Emanuel Bris</p>
            </footer>
        </div>
    </div>
  )
}

export default Footer