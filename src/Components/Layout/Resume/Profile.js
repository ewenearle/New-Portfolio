import React, { Fragment } from 'react';
import { Typography, Grid, Avatar, withStyles, List, ListItem, ListItemIcon, SvgIcon } from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import Home from '@material-ui/icons/Home'; 
import Phone from '@material-ui/icons/Phone'; 

const styles = theme => ({
  main: {
    flexGrow: 1,
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
    "fontFamily": "\"Work Sans\", sans-serif",
  },
  profileTitle: { 
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#ededed',
    [theme.breakpoints.down('md')]: {
      marginRight: '1em'
    },
    textDecoration: 'underline',
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
    textDecoration: 'underline'
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
    <Fragment>
      <Grid container spacing={16} className={classes.main}>
        
        <Grid item xs={12} className={classes.title}>
          <h1 style={{fontSize: 35}}>Ewen Earle</h1>
          <h2 className={classes.jobTitle}>Full Stack Web Developer</h2>
        </Grid>

        <Grid item xs>
          <Grid item className={classes.profile}>
            <Typography className={classes.profileTitle} variant="h6" gutterBottom>Profile</Typography>
            Junior Web Developer who is passionate about learning new technologies, bringing ideas to life, and working with dedicated teams to build efficient and robust applications suited to the user's needs. Tenacious, creative, and self-disciplined offering 13+ years of experience in IT, construction, and military environments.
          </Grid>
        </Grid>

        <Grid item xs={12} md={3}>
          <Avatar alt="Ewen Earle" src={require('../../../Images/profile.jpg')} className={classes.avatar} />
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
                  <SvgIcon className={classes.icon}>
                    <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
                  </SvgIcon>
                </ListItemIcon>
                  <a href="https://github.com/ewenearle" target="_blank" className={classes.link}>https://github.com/ewenearle</a>
              </ListItem>   
            </List>
          </Grid>
        </Grid>    
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(Profile);