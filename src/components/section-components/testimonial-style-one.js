import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialOne extends Component {

    componentDidMount() {
        const $ = window.$;
        
        if ($('.js-tilt').length) {
            $('.js-tilt').tilt({
                maxTilt: 20,
                perspective: 700, 
                glare: true,
                maxGlare: .3
            });
        }

        if ($('.thm__owl-carousel').length) {
            $('.thm__owl-carousel').each(function () {
                var Self = $(this);
                var carouselOptions = Self.data('options');
                var carouselPrevSelector = Self.data('carousel-prev-btn');
                var carouselNextSelector = Self.data('carousel-next-btn');
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on('click', function () {
                        thmCarousel.trigger('prev.owl.carousel');
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on('click', function () {
                        thmCarousel.trigger('next.owl.carousel');
                        return false;
                    });
                }
            });
        }
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return (
            <section className="testimonials-one">
                <div className="container">
                    <div className="testimonials-one__top">
                        <div className="block-title text-left">
                            <p><span>Los clientes dicen</span></p>
                            <h3>Saber todo sobre <br /> habilidades profesionales</h3>
                            <div className="block-title__line" />
                        </div>
                        <div className="testimonials-one__carousel-btn__wrap">
                            <a href="#" className="testimonials-one__carousel-btn-left"><i className="fa fa-angle-double-left" /></a>
                            <a href="#" className="testimonials-one__carousel-btn-right"><i className="fa fa-angle-double-right" /></a>
                        </div>
                    </div>
                    <div className="testimonials-one__arrow-decor-wrap">
                        <i className="fa fa-angle-right" />
                        <i className="fa fa-angle-right" />
                        <i className="fa fa-angle-right" />
                        <i className="fa fa-angle-right" />
                    </div>
                    <div className="testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme" data-carousel-prev-btn=".testimonials-one__carousel-btn-left" data-carousel-next-btn=".testimonials-one__carousel-btn-right" data-options='{"loop": true, "margin": 65, "stagePadding": 50, "items": 3, "smartSpeed": 700, "autoplay": true, "autoplayTimeout": 7000, "nav": false, "dots": false, "responsive": {"0": {"items": 1, "stagePadding": 20}, "1199": {"items": 2}, "1200": {"items": 3}}}'>
                        <div className="item">
                            <div className="testimonials-one__single">
                                <div className="testimonials-one__image">
                                    <img src={publicUrl + "assets/images/testimonials/testimonial-1-1.jpg"} alt={imagealt} />
                                </div>
                                <div className="testimonials-one__content">
                                    <p>Desde que comenzamos a colaborar con su equipo, hemos experimentado un crecimiento notable en nuestra eficiencia operativa. Su enfoque personalizado para diseñar soluciones que se adapten específicamente a nuestras necesidades ha sido fundamental para nuestro éxito reciente.</p>
                                    <h3>Carlos Torrez</h3>
                                    <span>Director &amp; innovación</span>
                                    <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonials-one__single">
                                <div className="testimonials-one__image">
                                    <img src={publicUrl + "assets/images/testimonials/testimonial-1-2.jpg"} alt={imagealt} />
                                </div>
                                <div className="testimonials-one__content">
                                    <p>La transición hacia una infraestructura de TI más sostenible y robusta fue impecable gracias a su experticia y dedicación. No sólo entendieron rápidamente nuestros objetivos, sino que también implementaron soluciones que superaron nuestras expectativas, demostrando un profundo conocimiento técnico y un compromiso real con la excelencia del servicio.</p>
                                    <h3>Michel Johnson</h3>
                                    <span>CTO &amp; TecnoSolutions Ltd.</span>
                                    <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonials-one__single">
                                <div className="testimonials-one__image">
                                    <img src={publicUrl + "assets/images/testimonials/testimonial-1-3.jpg"} alt={imagealt} />
                                </div>
                                <div className="testimonials-one__content">
                                    <p>Trabajar con un equipo tan atento y meticuloso ha revitalizado nuestra estrategia de marketing digital. Gracias a su enfoque estratégico y creativo, hemos visto un aumento significativo en el retorno de inversión de nuestras campañas publicitarias online.</p>
                                    <h3>Daniel Gómez</h3>
                                    <span>Gerente de Marketing &amp; Alimentos Frescos SA</span>
                                    <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestimonialOne;
