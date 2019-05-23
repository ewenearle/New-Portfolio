import React, { Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Home from './Layout/Home';
import CoverLetter from './Layout/Resume/CoverLetter';
import Resume from './Layout/Resume';
import NotFound from './Layout/NotFound';
import Projects from './Layout/Projects';
// import About from './Layout/About';


const styles = theme => ({
  layout: { 
    marginTop: 30,
    marginBottom: 20, 
    marginRight: 10,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      marginTop: 0,
      marginBottom: 0
    },
    backgroundColor: '#595959',
    boxShadow: '0 3px 55px 8px grey'  
  } 
});

class App extends Component {
  render() { 
    
    return (
      <div className={this.props.classes.layout}>
        <BrowserRouter>
          <Header />
          <Switch> 
            <Route path='/' exact component={Home} />
            <Route path='/coverletter' component={CoverLetter} />
            <Route path='/resume' component={Resume} />
            <Route path='/projects' component={Projects} />
            {/* <Route path='/about' component={About} /> */}
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>   
      </div>  
    )  
  };
};

export default withStyles(styles)(App);