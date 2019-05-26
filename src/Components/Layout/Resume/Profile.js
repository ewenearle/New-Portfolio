import React from 'react';
import { Typography, Grid, Avatar, withStyles, List, ListItem, ListItemIcon } from '@material-ui/core';
import ProfilePicture from '../../../images/profile.jpg';
import Email from '@material-ui/icons/Email';
import Home from '@material-ui/icons/Home'; 
import Phone from '@material-ui/icons/Phone';
import GitHubIcon from '../GitHubIcon.js';

const styles = theme => ({
  main: {
    backgroundColor: '#333e42',
    color: 'white',
    marginBottom: 5
  },
  title: {
    textAlign: 'center',
    "fontFamily": "\"Merriweather Sans\", sans-serif"
  },
  jobTitle: {
    "fontFamily": "\"Work Sans\", sans-serif",
    fontSize: 20,  
  },
  profile: {
    marginLeft: 20,
    lineHeight: '1.5',
    "fontFamily": "\"Merriweather Sans\", sans-serif"
  },
  profileTitle: { 
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#ededed',
    [theme.breakpoints.down('md')]: {
      marginRight: '1em'
    },
  },
  avatar: {
    margin: 'auto',
    marginTop: -5,
    width: 210,
    height: 210,
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
      marginBottom: 10
    }
  },
  about: {
    textTransform: 'uppercase',
    marginLeft: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      display: 'inline-block',
      marginLeft: 0
    },
    color: '#ededed',
  },
  contact: {
    textAlign: 'center',
    fontSize: 20
  },
  link: {
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none'
  },
  icon: {
    color: '#fff'
  }
});

const Profile = (props) => {
  const { classes } = props;
  return (
    
    <Grid container spacing={16} className={classes.main}>
      
      <Grid item xs={12} className={classes.title}>
        <h1 style={{fontSize: 35}}>Ewen Earle</h1>
        <h2 className={classes.jobTitle}>Full Stack Web Developer</h2>
      </Grid>

      <Grid item xs>
        <Grid item className={classes.profile}>
          <Typography className={classes.profileTitle} variant="h6" gutterBottom>Profile</Typography>
          Junior Web Developer who is passionate about learning new technologies, bringing ideas to life, and working with dedicated teams to build efficient and robust applications suited to the user's needs. Tenacious, creative,and self-disciplined offering 13+ years of experience in IT, construction, and military environments.
        </Grid>
      </Grid>

      <Grid item xs={12} md={3}>
        <Avatar alt="Ewen Earle" src={ProfilePicture} className={classes.avatar} />
      </Grid>

      <Grid item xs className={classes.contact}>
        <Grid item style={{display: 'inline-block'}}> 
          <Typography className={classes.about} variant="h6" gutterBottom>
            Personal Info
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon >
                <Home className={classes.icon}/>
              </ListItemIcon>
              St. John's, NL A1A 5G8
            </ListItem>
            <ListItem >
              <ListItemIcon >
                <Phone className={classes.icon}/>
              </ListItemIcon>
              (709) 765-0385
            </ListItem> 
            <ListItem>
              <ListItemIcon>
                <Email className={classes.icon}/>
              </ListItemIcon>
              <a href="mailto:ewen_earle@hotmail.com" target="_top" className={classes.link}>ewen_earle@hotmail.com</a>
            </ListItem> 
            <ListItem>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
                <a href="https://github.com/ewenearle" target="_blank" className={classes.link}>https://github.com/ewenearle</a>
            </ListItem>   
          </List>
        </Grid>
      </Grid>    
    </Grid>
  
  );
};

export default withStyles(styles)(Profile);