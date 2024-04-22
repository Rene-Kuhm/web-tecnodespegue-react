import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleTwo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-two  go-top">
		  <img src={publicUrl+"assets/images/shapes/about-two-bg.png"} alt={ imagealt } className="about-two__bg" />
		  <div className="container">
		    <img src={publicUrl+"assets/images/resources/cta-2-1.png"} alt={ imagealt } className="about-two__moc" />
		    <div className="row">
		      <div className="col-lg-6">
		        <div className="about-two__content">
		          <div className="block-title text-left">
		            <p><span>Que hacemos</span></p>
		            <h3>Ofrecemos la mejor <br /> solución para su negocio</h3>
		            <div className="block-title__line" />{/* /.block-title__line */}
		          </div>{/* /.block-title */}
		          <p>Nuestra dedicación a ofrecer la mejor solución para su negocio se manifiesta en nuestra capacidad única para entender profundamente sus desafíos y objetivos. Implementamos soluciones a medida que no solo resuelven problemas específicos, sino que también impulsan la eficiencia, la innovación y el crecimiento sostenible. Al combinar experiencia en la industria con tecnologías avanzadas, garantizamos que su inversión en nuestras soluciones se traduzca en resultados tangibles y una ventaja competitiva duradera en su mercado.</p>

		          <div className="about-two__box">
		            <div className="about-two__box-icon">
		              <i className="far fa-leaf" />
		            </div>{/* /.about-two__box-icon */}
		            <div className="about-two__box-content">
		              <h3>Gestiona tu proyecto</h3>
		              <p>Nuestro enfoque en la gestión de proyectos está diseñado para empoderar a su organización, proporcionando las herramientas y la orientación necesarias para manejar sus proyectos con precisión y previsibilidad. Desde la planificación inicial hasta la ejecución final, nuestro servicio asegura que cada aspecto de su proyecto se maneje con la mayor atención al detalle, reduciendo riesgos y maximizando la eficacia. Permita que nuestros expertos le ayuden a transformar su manera de gestionar proyectos, optimizando recursos y tiempos para alcanzar sus objetivos estratégicos más rápido y con mejor calidad.</p>

		            </div>{/* /.about-two__box-content */}
		          </div>{/* /.about-two__box */}
		          <div className="about-two__box">
		            <div className="about-two__box-icon">
		              <i className="far fa-laptop-code" />
		            </div>{/* /.about-two__box-icon */}
		            <div className="about-two__box-content">
		              <h3>Análisis  &amp; Datos empresariales</h3>
		              <p>En el corazón de toda decisión empresarial exitosa yace un análisis robusto y datos precisos. Nuestro servicio de análisis y datos empresariales equipa a su empresa con insights críticos y comprensiones profundas del mercado que impulsan decisiones estratégicas informadas. Al emplear las últimas tecnologías en análisis de datos y métodos estadísticos avanzados, proporcionamos una visión clara que puede transformar sus datos en una poderosa ventaja competitiva, asegurando que cada decisión que tome esté basada en datos precisos y análisis experto.</p>

		            </div>{/* /.about-two__box-content */}
		          </div>{/* /.about-two__box */}
		        </div>{/* /.about-two__content */}
		      </div>{/* /.col-lg-6 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>


        }
}

export default AboutStyleTwo