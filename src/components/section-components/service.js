import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Navbar from '../global-components/navbar';

class Service extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div> 
		<Navbar className="Navbar"/>
	    <section className="service-two" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/dotted-patter-1.png)'}}>
		  <div className="container  go-top">
		    <div className="row">
		      <div className="col-lg-5 d-flex">
		        <div className="my-auto">
		          <div className="service-two__block">
		            <div className="block-title-two text-left">
		              <p>Nuestros Servicios</p>
		              <h3>Proporcionamos lo mejor <br />
		                brindamos el mejor servicio para su  <br />
		                compañia</h3>
		            </div>{/* /.block-title-two */}
					<p>Enfocados en la excelencia, nos dedicamos a superar las expectativas con soluciones a medida que potencian su empresa hacia nuevos niveles de éxito. Nuestro compromiso con la calidad y la atención al detalle garantiza que cada aspecto de nuestro servicio no solo cumpla, sino que exceda sus necesidades y objetivos empresariales, proporcionando resultados tangibles y sostenibles.</p>

		            <Link to="/service-details" className="thm-btn">Ver todos los servicios <i className="fa fa-angle-double-right" /></Link>
		            {/* /.thm-btn */}
		          </div>{/* /.service-two__block */}
		        </div>{/* /.my-auto */}
		      </div>{/* /.col-lg-5 */}
		      <div className="col-lg-7">
		        <div className="service-two__box-wrap">
		          <div className="row">
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-hand-holding-usd" />
		                  <h3><a to="/service-details">Seguro &amp; Financiero</a></h3>
		                  <p>Descubra soluciones de seguro y financiamiento diseñadas para proporcionar seguridad y estabilidad, optimizando así su gestión financiera y mitigando riesgos de manera efectiva para el crecimiento continuo de su empresa.</p>

		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-umbrella-beach" />
		                  <h3><a to="/service-details">Planificación de inversiones</a></h3>
		                  <p>Maximice sus retornos con estrategias de planificación de inversiones personalizadas, diseñadas para alinear sus objetivos financieros con oportunidades de mercado, asegurando así una gestión de capital eficiente y orientada al futuro.</p>

		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-paper-plane" />
		                  <h3><Link to="/service-details">Posicionamiento en el mercado</Link></h3>
		                  <p>Fortalezca la presencia de su empresa en el mercado con nuestras estrategias avanzadas de posicionamiento, diseñadas para diferenciar su marca y captar la atención de su público objetivo, impulsando así el crecimiento y la competitividad.</p>

		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-chart-network" />
		                  <h3><Link to="/service-details">Consulta de trabajo</Link></h3>
		                  <p>Transforme su entorno laboral con nuestras consultas de trabajo, donde ofrecemos asesoramiento experto y soluciones prácticas para mejorar la eficiencia operativa y el bienestar de los empleados, garantizando así un desempeño superior y una mayor satisfacción laboral.</p>

		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		          </div>{/* /.row */}
		        </div>{/* /.service-two__box-wrap */}
		      </div>{/* /.col-lg-7 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>
		</div>

        }
}

export default Service