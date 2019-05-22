import React, { Fragment } from 'react';
import { Grid, withStyles, Typography } from '@material-ui/core';
import Background from '../../../../background/test3.jpg' 
import Flag from '../../../../background/1510038-200.png' 

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42'
  },
  welcome: {
    color: '#233237',
    marginTop: '1.5em',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 1.5,
    "fontFamily": "\"Merriweather Sans\", sans-serif",
    [theme.breakpoints.down('sm')]: {
      padding: 8
    }
  },
  flag: {
    textAlign: 'center',
    opacity: 0.5   
  },
  background: {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${Background})` ,
    textAlign: 'center',
    height: '73vh',
    backgroundSize: "cover",
    [theme.breakpoints.down('md')]: {
      height: '100%',
    }
  } 
});

const Home = (props) => {
  const { classes } = props;
  return (
    <Fragment>
      <Grid container spacing={16} className={classes.main}>      
        <Grid item xs={12} className={classes.background}>
          <Typography variant="h3" gutterBottom className={classes.welcome}>
              Hello, my name is <span style={{color: '#c64335'}}> Ewen Earle</span>
          </Typography>  
          <Typography variant="h5" gutterBottom style={{marginTop: '1em'}} className={classes.welcome}>
              I'm a Web Developer from St. John's, Newfoundland        
          </Typography>   
          <Typography variant="h5" gutterBottom className={classes.flag}>
              <img src = {Flag} />
          </Typography>      
        </Grid>     
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(Home);