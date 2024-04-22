import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Skill extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="progress-one">
			  <img src={publicUrl+"assets/images/shapes/progress-bg-1.png"} alt={ imagealt } className="progress-one__bg" />
			  <div className="container">
			    <img src={publicUrl+"assets/images/resources/progress-1-1.png"} alt={ imagealt } className="progress-one__moc" />
			    <div className="row justify-content-end">
			      <div className="col-lg-6">
			        <div className="progress-one__content">
			          <div className="block-title text-left">
			            <p><span>Nuestras habilidades</span></p>
			            <h3>Saber todo sobre <br /> habilidades profecionales</h3>
			            <div className="block-title__line" />{/* /.block-title__line */}
			          </div>{/* /.block-title */}
			          <p>Desarrollar habilidades profesionales es clave para ascender en cualquier carrera. Nuestro enfoque integral te proporciona las herramientas y conocimientos necesarios para dominar competencias esenciales y avanzadas, asegurando que estés preparado para enfrentar y superar los desafíos del mercado laboral actual.</p>

			          <div className="progress-one__progress-wrap">
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Estrategia de negocios</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '95%', backgroundColor: '#3f02a8'}}>
			                  <b>95%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>SEO Optimización</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '100%', backgroundColor: '#ff57a4'}}>
			                  <b>100%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Marketing de medios sociales</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '83%', backgroundColor: '#00c8b3'}}>
			                  <b>83%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Desarrollo web</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '98%', backgroundColor: '#ff9b0d'}}>
			                  <b>90%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			          </div>{/* /.progress-one__progress-wrap */}
			        </div>{/* /.progress-one__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row justify-content-end */}
			  </div>{/* /.container */}
			</section>


        }
}

export default Skill