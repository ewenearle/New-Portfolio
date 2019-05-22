import React, { Fragment } from 'react';
import { Grid, withStyles, Link, Typography } from '@material-ui/core';

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42',
    color: 'white',
    
    "fontFamily": "\"Merriweather Sans\", sans-serif"
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    height: '100vh'  
  },
  icon: {
    color: '#fff',
    width: 50,
    height: 50
  },
  link: {
    color: '#fff',
    '&:hover': {
      textDecoration: "none",
   }
  },
  
});

const Projects = (props) => {
  const { classes } = props;
  return (
    <Fragment >
      <Grid container spacing={16} className={classes.main}>
        <Grid item xs={12} className={classes.title}>
         
          <h1>Projects</h1>
          
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(Projects);