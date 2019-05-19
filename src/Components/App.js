import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Resume from './Layout/Resume';
import NotFound from './Layout/NotFound';
import { withStyles } from '@material-ui/core/styles';

/* import Header from './Layout/Header' */

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
      marginTop: 0
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
          {/* <Header /> */}
          <Switch>
            <Route exact path='/resume' render={() =>  <Redirect to='/' />}/>  
            <Route exact path="/" component={Resume} />
            <Route component = {NotFound} />
          </Switch>
        </BrowserRouter>   
      </div>  
    )  
  };
};

export default withStyles(styles)(App);