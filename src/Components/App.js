import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Layout/Home';
import Portfolio from './Layout/Portfolio';
import Resume from './Layout/Resume';
import NotFound from './Layout/NotFound';
// import CoverLetter from './Layout/Resume/CoverLetter';

const styles = theme => ({
  layout: { 
    overflow: 'hidden',
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
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/resume' component={Resume} />
            {/* <Route path='/coverletter' component={CoverLetter} /> */}
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>   
      </div>  
    )  
  };
};

export default withStyles(styles)(App);