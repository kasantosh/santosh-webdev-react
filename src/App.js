import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Projects' component={Projects} />
        <Route exact path='/Contact' component={Contact} />
      </Switch>
      <div className="mt-5">
        <Footer />
      </div>
      
    </div>
    </Router>
  )
}

export default App;
