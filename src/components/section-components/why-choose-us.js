import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class WhyChooseUs extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="service-one go-top">
          <div className="container">
            <div className="block-title text-center">
              <p><span>Porque con nosotros</span></p>
              <h3>Éxito en su negocio con <br />
              Tecnodespegue</h3>
              <div className="block-title__line" />{/* /.block-title__line */}
            </div>{/* /.block-title */}
            <div className="row high-gutter  go-top">
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-1.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3><Link to="/service-details">Estrategia de negocios &amp; Investigación de mercado</Link></h3>
                      <p>Mejorar el negocio</p>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>La combinación de una sólida estrategia de negocios junto con una investigación de mercado exhaustiva es fundamental para el éxito empresarial en el entorno competitivo actual. Al entender profundamente las tendencias del mercado y las necesidades de los consumidores, las empresas pueden diseñar estrategias que no solo respondan de manera efectiva a las demandas del mercado, sino que también posicionen a la compañía como líder en innovación y servicio al cliente. Este enfoque integrado es esencial para anticiparse a los cambios del mercado y asegurar una ventaja competitiva sostenible.</p>

                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-2.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3><Link to="/service-details">SEO, PPC &amp; Soluciones 
                          de redes sociales</Link></h3>
                      <p>SEO optimización</p>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>En el dinámico mundo del marketing digital, la combinación de SEO, PPC y estrategias de redes sociales se convierte en la piedra angular para alcanzar una visibilidad óptima en línea y captar eficazmente a su audiencia objetivo. Optimizar su sitio para motores de búsqueda asegura una presencia sólida en los resultados orgánicos, mientras que las campañas de PPC ofrecen una exposición inmediata y dirigida. Paralelamente, las redes sociales no solo amplifican su mensaje, sino que también fomentan un diálogo interactivo con sus clientes. Integrar estos enfoques proporciona una sinergia que impulsa el tráfico, aumenta las conversiones y fortalece su marca en el vasto ecosistema digital.</p>

                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-3.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3><Link to="/service-details">Diseño y 
                          desarrollo web</Link></h3>
                      <p>Soluciones web</p>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>En el corazón de una estrategia digital exitosa se encuentra un diseño y desarrollo web excepcional que no solo capta la esencia de su marca, sino que también ofrece una experiencia de usuario sin igual. Nuestro enfoque en la creación de soluciones web a medida asegura que cada aspecto del sitio no solo sea visualmente impresionante, sino también optimizado para la usabilidad y la conversión. Desde la arquitectura inicial hasta el lanzamiento final, cada paso se maneja con la máxima atención al detalle, garantizando que su sitio web no solo cumpla, sino que supere las expectativas de sus visitantes y fomente una conexión duradera con ellos.</p>

                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>

        }
}

export default WhyChooseUs