import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
	
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
           <header className="site-header-one go-top">
			  <nav className="main-nav__one stricky">
			    <div className="container-fluid">
			      <div className="main-nav__logo-box">
			        <Link to="/">
			          <img src={publicUrl+"assets/images/Tecno.svg" } alt={ imgattr } />
			        </Link>
			        <a href="#" className="side-menu__toggler"><i className="fa fa-bars" /></a>
			      </div>{/* /.main-nav__logo-box */}
			      <div className="main-nav__main-navigation">
			        <ul className=" main-nav__navigation-box">
			          <li className="dropdown">
			            <Link to="/">Home</Link>
			          </li>
			          <li>
			            <Link to="/about-style-one">About</Link>
			          </li>
			          <li className="dropdown">
			            <Link to="/service">Services</Link>
			          </li>
			          <li className="dropdown">
			            <a href="#">Work</a>
			            <ul>
			              <li><Link to="/portfolio-details">Portfolio Details</Link></li>
			            </ul>{/* /.sub-menu */}
			          </li>
			          <li className="dropdown">
			            <a href="https://tecno-blog.com">Blog</a>
			          </li>
			          <li>
			            <Link to="/contact">Contact</Link>
			          </li>
			        </ul>
			      </div>{/* /.main-nav__main-navigation */}
			    </div>
			  </nav>
			</header>
        )
    }
}


export default Navbar