import React, { Fragment } from 'react';
import { Grid, withStyles, Typography } from '@material-ui/core';
import Background from '../../images/background.jpg'; 
import Flag from '../../images/flag.png'; 

const styles = theme => ({
  main: {
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
  const { main, background, welcome, flag } = props.classes;
  return (
    <Fragment>
      <Grid container spacing={16} className={main}>      
        <Grid item xs={12} className={background}>
          <Typography variant="h3" gutterBottom className={welcome}>
              Hello, my name is <span style={{color: '#c64335'}}> Ewen Earle</span>
          </Typography>  
          <Typography variant="h5" gutterBottom style={{marginTop: '1em'}} className={welcome}>
              I'm a full-stack web developer from St. John's, Newfoundland        
          </Typography>   
          <Typography variant="h5" gutterBottom className={flag}>
              <img src = {Flag} />
          </Typography>      
        </Grid>     
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(Home);