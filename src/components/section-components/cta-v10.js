import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV10 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="cta-eleven  go-top">
              <img src={publicUrl+"assets/images/shapes/cta-shape-2-1.png"} className="cta-eleven__moc-1" alt="cta image" />
              <img src={publicUrl+"assets/images/shapes/cta-shape-2-2.png"} className="cta-eleven__moc-2" alt="cta image" />
              <img src={publicUrl+"assets/images/shapes/cta-shape-2-3.png"} className="cta-eleven__moc-3" alt="cta image" />
              <div className="container">
                <h3>Trabaja con nosotros</h3>
                <p>Únete a nuestro equipo y forma parte de una comunidad apasionada por la excelencia y la innovación. En nuestro espacio, valoramos la creatividad y el compromiso, ofreciendo un ambiente dinámico donde cada miembro tiene la oportunidad de crecer profesionalmente mientras contribuye a proyectos que hacen la diferencia. Si estás listo para desafíos que inspiren y transformen, nosotros somos tu próximo paso.</p>
                {/* /.thm-btn cta-eleven__btn */}
              </div>{/* /.container */}
            </section>


        }
	}

export default CtaV10