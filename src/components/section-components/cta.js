import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Cta extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="cta-one  go-top">
		  <div className="container">
		    <div className="inner-container wow fadeInUp" data-wow-duration="1500ms">
		      <div className="cta-one__left">
		        <h3>Construye tu negocio</h3>
		        <p>Da el primer paso hacia el éxito empresarial con estrategias que solidifican tu visión y aseguran un crecimiento sostenible.</p>
		      </div>{/* /.cta-one__left */}
		      <div className="cta-one__right">
		        <Link to="/contact" className="thm-btn cta-one__btn">Contactate <i className="fa fa-angle-double-right" /></Link>
		        {/* /.thm-btn cta-one__btn */}
		      </div>{/* /.cta-one__right */}
		    </div>{/* /.inner-container */}
		  </div>{/* /.container */}
		</section>

        }
}

export default Cta