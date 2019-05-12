import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Resume from './Layout/Resume'
import Header from './Layout/Header.js'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginTop: '20px',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    backgroundColor: '#595959'
  } 
})

const App = (props) => { 
  const { classes } = props;
  return (
    <div className={classes.layout}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Resume} />
        </Switch>
      </BrowserRouter>   
    </div>  
  )  
}

export default withStyles(styles)(App);