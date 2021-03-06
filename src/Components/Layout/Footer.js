import React from 'react';
import { AppBar, Toolbar, Grid, withStyles } from '@material-ui/core';
import GitHubIcon from './GitHubIcon.js'
import Email from '@material-ui/icons/Email';

const styles = theme => ({
  email: {
    textAlign: 'right',
    marginLeft: -8,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  link: {
    color: '#fff', 
  },
  github: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left'
    }
  }
});

const Footer = (props) => {
  const { classes } = props;
 
  return (
    
    <Grid container spacing={16}>
      <AppBar position="static">
        <Toolbar className={classes.nav}>
          <Grid item xs>
            &#169;&nbsp;&nbsp;Ewen Earle
          </Grid>
          <Grid item xs = {1} className={classes.github}>
            <a href="https://github.com/ewenearle" target="_blank" className={classes.link}>
              <GitHubIcon/>
            </a>                  
          </Grid>
          <Grid item xs = {1} className={classes.email}>
            <a href="mailto:ewen_earle@hotmail.com" target="_top" className={classes.link}>
              <Email />
            </a>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
    
  );
};


export default withStyles(styles)(Footer);