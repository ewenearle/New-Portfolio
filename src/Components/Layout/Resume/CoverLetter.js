import React, { Fragment } from 'react';
import { Grid, withStyles, List, Typography, ListItem, ListItemIcon, Divider } from '@material-ui/core';
import Lens from '@material-ui/icons/Lens';

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42',
    color: 'white',
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    
  },
  address:{
    textAlign: 'center',
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  body:{
    margin: 25,
  },
  bullet: {
    color: '#fff',
    width: 7,
    height: 7
  },

});

const CoverLetter = (props) => {

  const { main, title, address, body, bullet, list } = props.classes;

  return (
    <Fragment>
      <Grid container spacing={16} className={main}>
        <Grid item xs={12}>
          <Typography variant="h4" className={title}>
            Ewen Earle
          </Typography>
    
          <Typography variant="subtitle2" className={address} gutterBottom>
            40 Eastbourne Crescent, St. John's, NL A1A 5G8&nbsp;|&nbsp;Cell: (709) 765-0385&nbsp;|&nbsp;ewen_earle@hotmail.com
          </Typography>
        </Grid>

        <Grid item xs={12} >
          <Typography variant="body1" className={body}>
            <span style={{fontWeight:'bold'}}>To the Hiring Manager,</span> <br /><br />This letter is in response to your advertisement for the position of Junior Full Stack Developer. In the header, you will find a link to my resume. I am the ideal Candidate for the following reasons:
          </Typography>

          <List className={body}>
            <ListItem>
              <ListItemIcon>
                <Lens className={bullet} /> 
              </ListItemIcon>
              <Typography variant="body1">
                Knowledgeable in CSS3, HTML5, JavaScript (ES6+) and ReactJS using Context API for state management;
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon>  
                <Lens className={bullet}/>
              </ListItemIcon>
              <Typography variant="body1">
                Comfortable working with server side technologies such as Node.js and the Express framework, while using MongoDB as a database;
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon>  
                <Lens className={bullet}/>
              </ListItemIcon>
              <Typography variant="body1">
                Very organized person with excellent communication skills. Proven ability to take instructions and to communicate effectively to conduct needs analyses and develop resolutions and options;
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon>  
                <Lens className={bullet}/>
              </ListItemIcon>
              <Typography variant="body1">
                Many years of experience working in team environments due to my military and construction background;
              </Typography>
            </ListItem>
          </List>

          <Typography variant="body1" className={body}>
            I welcome the opportunity to discuss my qualifications and your needs further during a personal interview. Thank you for your time and I look forward to hearing from you.
          </Typography>

          <Typography variant="body1" className={body}>
            Sincerely, <br /><br /> Ewen Earle
          </Typography>
        </Grid>
      </Grid> 
    </Fragment>
  );
};

export default withStyles(styles)(CoverLetter);