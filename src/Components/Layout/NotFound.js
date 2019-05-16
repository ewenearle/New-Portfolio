import React from 'react';
import { Grid, withStyles, ListItemIcon } from '@material-ui/core';
import Error from '@material-ui/icons/Error'; 

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42',
    color: 'white'
  },
  title: {
    textAlign: 'center',
    "fontFamily": "\"Merriweather Sans\", sans-serif"
  },
  icon: {
    color: '#fff',
    width: 50,
    height: 50
  }
})

const NotFound = (props) => {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <Grid container spacing={24}>
        <Grid item xs={12} className={classes.title}>
          <Error className={classes.icon}/>
          <h1>404 - Page not found</h1>  
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(NotFound);