import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleOne extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-one  go-top">
			  <div className="container">
			    <img src={publicUrl+"assets/images/resources/cta-1-1.png"} alt={ imagealt } className="about-one__moc" />
			    <div className="row justify-content-end">
			      <div className="col-lg-6">
			        <div className="about-one__content">
			          <div className="block-title text-left">
			            <p><span>Sobre nosotros</span></p>
			            <h3>Estamos especializados en <br /> Soluciones Empresariales</h3>
			            <div className="block-title__line" />{/* /.block-title__line */}
			          </div>{/* /.block-title */}
			          <p>Nuestra especialización en soluciones empresariales se centra en entender y abordar los retos únicos a los que se enfrentan nuestros clientes en sus respectivos sectores. Nos dedicamos a diseñar estrategias personalizadas que no solo optimizan los procesos operativos, sino que también potencian la eficiencia y la innovación. Al integrar tecnologías avanzadas y prácticas probadas, garantizamos soluciones que ayudan a las empresas a escalar, a adaptarse a los cambios del mercado y a mantenerse competitivas en un entorno empresarial cada vez más complejo.</p>

			          <h4>Siempre estamos contigo</h4>
			          <p>Comprometidos con el éxito continuo de nuestros clientes, siempre estamos a su lado, ofreciendo apoyo constante y asesoramiento experto. Nuestra filosofía de colaboración garantiza que cada cliente reciba la atención personalizada y el respaldo necesario para superar cualquier desafío. Ya sea a través de consultorías regulares, asistencia técnica o adaptación estratégica, nos aseguramos de que usted tenga todos los recursos necesarios para tomar decisiones informadas y estratégicas que impulsen el crecimiento sostenido y la rentabilidad de su negocio.</p>

			          <Link to="/about" className="thm-btn about-one__btn">Leer más <i className="fa fa-angle-double-right" /></Link>
			          {/* /.thm-btn */}
			        </div>{/* /.about-one__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
}

export default AboutStyleOne