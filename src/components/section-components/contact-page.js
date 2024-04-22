import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
		  <section className="contact-two">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-5">
		          <div className="contact-two__content">
		            <div className="contact-two__block">
		              <h3>No dude en contactar con nosotros</h3>
		              <p>Si tiene alguna pregunta o necesita más información, nuestro equipo está siempre disponible para asistirle. Entendemos la importancia de resolver sus inquietudes con rapidez y eficacia. Contactarnos es el primer paso para encontrar las soluciones que necesita, y estamos comprometidos a proporcionarle un servicio excepcional en cada momento de su experiencia con nosotros.</p>

		            </div>{/* /.contact-two__block */}
		            <ul className="list-unstyled contact-two__info-list">
		              <li>
		                <div className="contact-two__info-list-title">
		                  <i className="far fa-map-marked" />
		                  Dirección :
		                </div>{/* /.contact-two__info-list-title */}
		                <p>Calle 15 bis, Eduardo Castex (LP), <br></br> Argentina</p>
		              </li>
		              <li>
		                <div className="contact-two__info-list-title">
		                  <i className="far fa-phone" />
		                  LLamanos :
		                </div>{/* /.contact-two__info-list-title */}
		                <p><a href="tel:2334409838">2334409838</a></p>
		              </li>
		              <li>
		                <div className="contact-two__info-list-title">
		                  <i className="far fa-envelope" />
		                  Email Us :
		                </div>{/* /.contact-two__info-list-title */}
		                <p><a href="mailto:renekuhm2@gmail.com">renekuhm2@gmail.com</a></p>
		              </li>
		            </ul>{/* /.contact-two__info-list */}
		          </div>{/* /.contact-two__content */}
		        </div>{/* /.col-lg-5 */}
		        <div className="col-lg-7">
		          <form action="#" className="contact-two__form">
		            <div className="contact-two__block">
		              <h3>Ponerse en contacto</h3>
		              <p>Estamos aquí para ayudarle y responder a cualquier pregunta que pueda tener. Creemos en la importancia de crear conexiones valiosas y en asegurarnos de que su experiencia con nosotros sea tanto informativa como eficiente. No dude en ponerse en contacto con nosotros; nuestro equipo está listo para ofrecerle la asistencia necesaria y hacer que cada interacción sea productiva.</p>

		            </div>{/* /.contact-two__block */}
		            <div className="row">
		              <div className="col-md-6">
		                <input type="text" placeholder="Nombre completo" />
		              </div>{/* /.col-md-6 */}
		              <div className="col-md-6">
		                <input type="text" placeholder="Email " />
		              </div>{/* /.col-md-6 */}
		              <div className="col-md-12">
		                <input type="text" placeholder="Subjeto" />
		              </div>{/* /.col-md-12 */}
		              <div className="col-md-12">
		                <textarea name="message" placeholder="Mensaje" defaultValue={""} />
		                <button type="submit" className="thm-btn contact-two__btn">enviar mensaje <i className="fa fa-angle-double-right" /></button>{/* /.thm-btn contact-two__btn */}
		              </div>{/* /.col-md-12 */}
		            </div>{/* /.row */}
		          </form>{/* /.contact-two__form */}
		        </div>{/* /.col-lg-7 */}
		      </div>{/* /.row */}
		    </div>{/* /.container */}
		  </section>{/* /.contact-two */}
		  <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6462.915365747219!2d-64.30447995198439!3d-35.91129575047384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x95c352ed54f12e33%3A0x4afd5fe747818bc4!2sEduardo%20Castex%2C%20La%20Pampa!3m2!1d-35.9160166!2d-64.2956413!4m5!1s0x95c352e343f450d7%3A0xfb4c22fe576a80fb!2sCalle%2011%20Bis%2C%20Eduardo%20Castex%2C%20La%20Pampa!3m2!1d-35.906774!2d-64.30252349999999!5e0!3m2!1sen!2sar!4v1713804146389!5m2!1sen!2sar" width='100%' height={'400px'} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>

        }
}

export default Contact