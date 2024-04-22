import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import About from './components/about';
import Service from './components/service';
import ServiceDetails from './components/section-components/service-details';
import PortfolioDetails from './components/portfolio-details';
import Pricing from './components/pricing';
import Faq from './components/faq';
import Testimonial from './components/testimonial';
import Team from './components/team';
import BlogList from './components/blog-list';
import Contact from './components/contact';


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route path="/about-style-one" component={About} />
	                    <Route path="/service" component={Service} />
						<Route path="/service-details" component={ServiceDetails} />
	                    <Route path="/portfolio-details" component={PortfolioDetails} />
	                    <Route path="/pricing" component={Pricing} />
	                    <Route path="/faq" component={Faq} />
	                    <Route path="/testimonial" component={Testimonial} />
	                    <Route path="/team" component={Team} />
	                    <Route path="/blog-list" component={BlogList} />
	                    <Route path="/contact" component={Contact} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('bizkar'));
