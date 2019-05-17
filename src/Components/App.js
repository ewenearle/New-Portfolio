import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Resume from './Layout/Resume';
import NotFound from './Layout/NotFound';
import Header from './Layout/Header';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginTop: 20,
    marginBottom: 20, 
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    backgroundColor: '#595959',
    boxShadow: '0 3px 5px 2px grey'
  } 
});

class App extends Component {
  render() { 
    return (
      <div className={this.props.classes.layout}>
        <BrowserRouter>
          <Header />
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