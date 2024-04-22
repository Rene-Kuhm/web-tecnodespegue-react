import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Navbar from '../global-components/navbar';

class ServiceDetails extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return <div className='service-details' style={{paddingTop: '60px', color: 'black'}}> 
		     
				<Navbar className='bg-black' />
			 
		    
	       <section className="service-details" >
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 clearfix">
			        <img src={publicUrl+"assets/images/resources/service-d-moc-1.png"} alt={ imagealt } className="float-right wow fadeInLeft" data-wow-duration="1500ms" />
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-details__content">
			          <h3>El software hace el  <br /> trabajo pero siempre  <br /> estás en la solución correcta </h3>
			          <p>En un mundo donde la tecnología evoluciona constantemente, elegir la solución de software adecuada es crucial. Nuestro enfoque garantiza que no solo obtengas una herramienta que realiza el trabajo, sino una solución integral que se adapta y evoluciona con tus necesidades, asegurando que siempre estés al frente de la innovación y eficiencia operativa.</p>

			          <p>Con nuestra solución de software, no solo obtienes una herramienta poderosa, sino también un compañero confiable en tu jornada de crecimiento. Nos comprometemos a brindarte apoyo constante y actualizaciones estratégicas que se anticipan a las tendencias del mercado, asegurando que tu empresa no solo responda a los desafíos actuales, sino que también esté preparada para las oportunidades futuras.</p>
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			    <div className="row">
			      <div className="col-lg-6">
			        <img src={publicUrl+"assets/images/resources/service-d-moc-2.png"} alt={ imagealt } className="wow fadeInRight" data-wow-duration="1500ms" />
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-details__content">
			          <h3>Nosotros ayudamos a hacer crecer <br /> su crecimiento empresarial</h3>
			          <ul className="list-unstyled service-details__list">
			            <li>
						En un mercado competitivo, facilitar el crecimiento empresarial no solo requiere innovación, sino también un aliado estratégico comprometido. Nosotros proporcionamos soluciones personalizadas que se adaptan a las dinámicas únicas de su negocio, asegurando un desarrollo sostenible y una ventaja competitiva clara.
			            </li>
			            <li>Gracias a nuestra experiencia y tecnología avanzada, ayudamos a las empresas a navegar por los desafíos del mercado con una mayor eficiencia. Desde la optimización de procesos hasta la adopción de nuevas plataformas tecnológicas, nuestro objetivo es maximizar su potencial de crecimiento, asegurando que cada paso que dé esté bien fundamentado en estrategias probadas y resultados medibles.</li>
			          </ul>{/* /.list-unstyled service-details__list */}
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>
			</div>	

        }
}

export default ServiceDetails