import React, { Fragment } from 'react';
import { Grid, withStyles, Link, Typography } from '@material-ui/core';
import Error from '@material-ui/icons/Error'; 

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42',
    color: 'white',
    "fontFamily": "\"Merriweather Sans\", sans-serif"
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
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
      color: '#b2b0b0'
   }
  }
});

const NotFound = (props) => {
  console.log(props.match.url)
  const { classes } = props;
  return (
    <Fragment>
      <Grid container spacing={16} className={classes.main}>
        <Grid item xs={12} className={classes.title}>
          <Error className={classes.icon}/>
          <h1>404 - Oops! Page not found</h1>
          <Typography variant="h6"><Link href="/" className={classes.link}>Go back</Link></Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(NotFound);