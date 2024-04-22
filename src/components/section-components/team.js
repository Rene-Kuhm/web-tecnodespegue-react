import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Team extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        return (
            <section className="team-one">
                <div className="container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <div className="block-title text-center">
                        <p><span>Nuestro equipo</span></p>
                        <h3>Conoce a nuestro miembro <br /> exclusivo del equipo</h3>
                        <div className="block-title__line" />
                    </div>
                    <div className="row" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-one__single">
                                <div className="team-one__image">
                                    <img src={publicUrl + "assets/images/team/team-1-3.jpg"} alt={imagealt} />
                                </div>
                                <div className="team-one__content">
                                    <div className="team-one__social">
                                        <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-google-plus-g" /></a>
                                        <a href="#"><i className="fab fa-behance" /></a>
                                    </div>
                                    <h3>René Kuhm</h3>
                                    <p>FullStack Development</p>
                                </div>
                            </div>
                        </div>
                        {/* Repite los bloques para otros miembros del equipo si es necesario */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;
