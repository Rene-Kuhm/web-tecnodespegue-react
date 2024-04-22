import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import Navbar from '../global-components/navbar'
class PortFolioDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return (
      <div>
        <Navbar />
        <section className='portfolio-details'>
          <div className='container'>
            <h3 className='portfolio-details__title'>Ilustración Creativa</h3>
            <br />
            <p>Explora el vibrante mundo de la ilustración creativa donde cada trazo revela una historia, cada color despierta una emoción. Nuestros artistas combinan técnica y pasión para transformar ideas ordinarias en obras visuales extraordinarias, capturando la imaginación y comunicando mensajes profundos de manera efectiva y emocionante. Sumérgete en un universo donde la creatividad no conoce límites y cada ilustración es una ventana a nuevos mundos de posibilidades.</p>

            <br />
            <img
              src={publicUrl + 'assets/images/portfolio/portfolio-d-1.jpg'}
              alt={imagealt}
              className='img-fluid'
            />
            <br />
            <br />
            <p>Desde la publicidad hasta la narrativa visual, la ilustración creativa juega un papel crucial en cómo las marcas y los cuentistas visualizan sus visiones únicas. Al integrar elementos artísticos innovadores, nuestros ilustradores no solo enriquecen el contenido visual, sino que también fortalecen la conexión emocional con el público, creando experiencias memorables que resuenan y perduran en la mente de los espectadores.</p>

            <br />
            <h4>información del proyecto</h4>
            <br />
            <div className='portfolio-details__box'>
              <div className='portfolio-details__box-single'>
                <h3>Nombre del proyecto</h3>
                <p>Tecnodespegue</p>
              </div>
              {/* /.portfolio-details__box-single */}
              <div className='portfolio-details__box-single'>
                <h3>fecha del proyecto</h3>
                <p>05 Julio 2019</p>
              </div>
              {/* /.portfolio-details__box-single */}
              <div className='portfolio-details__box-single'>
                <h3>Nuestros clientes </h3>
                <p>Bc Design Studio</p>
              </div>
              {/* /.portfolio-details__box-single */}
              <div className='portfolio-details__box-single'>
                <h3>ubicación</h3>
                <p>Eduardo Castex , (LP)</p>
              </div>
              <div className='portfolio-details__box-single'>
                <h3>Fecha final</h3>
                <p>01 enero 2024</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default PortFolioDetails
