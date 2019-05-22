import React, { Fragment } from 'react';
import { Grid, withStyles, List, Typography, ListItem, ListItemIcon } from '@material-ui/core';
import Lens from '@material-ui/icons/Lens';

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42',
    color: 'white',
    "fontFamily": "\"Merriweather Sans\", sans-serif", 
    // marginBottom: 5
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
    fontWeight: 'bold', 
   
    // "fontFamily": "\"Work Sans\", sans-serif",
  },
  address:{
    textAlign: 'center',
  },
  body:{
    margin: 20
  },
  bullet: {
    color: '#fff',
    width: 7,
    height: 7
  },
  
});

const CoverLetter = (props) => {
  const { classes } = props;
  return (
    <Fragment>
      <Grid container spacing={16} className={classes.main}>
        <Grid item xs={12} >
          <Typography variant="h4" className={classes.title}>
            Ewen Earle
          </Typography>
          
          <Typography variant="subtitle2" className={classes.address} gutterBottom>
            40 Eastbourne Crescent, St. John's, NL A1A 5G8&nbsp;|&nbsp;Cell: (709) 765-0385&nbsp;|&nbsp;ewen_earle@hotmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} >
          <Typography variant="body1" style={{whiteSpace: 'pre-line'}} className={classes.body}>
            To the Hiring Manager, <br /><br />This letter is in response to your advertisement for the position of Junior Full Stack Developer. In the header, you will find a link to my resume. I am the ideal Candidate for the following reasons:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Lens className={classes.bullet} /> 
              </ListItemIcon>
              <Typography variant="body1">
                Knowledgeable in CSS3, HTML5, JavaScript (ES6+) and ReactJS using Context API for state management.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>  
                <Lens className={classes.bullet}/>
              </ListItemIcon>
              <Typography variant="body1">
                Comfortable working with server side technologies such as Node.js and the framework Express while using MongoDB as a database.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>  
                <Lens className={classes.bullet}/>
              </ListItemIcon>
              <Typography variant="body1">
                Dolore in culpa ut adipisicing est. Ullamco tempor magna duis mollit do ullamco eiusmod ex commodo eiusmod cupidatat amet qui labore. Nisi fugiat nostrud tempor ad excepteur laborum labore ad.
              </Typography>
            </ListItem>
          </List>
          
        </Grid>


        {/* <Grid item xs={4}>
          fdsa
        </Grid>
        <Grid item xs={8}>
         fdsa
        </Grid>*/}
        
        
      </Grid> 
    </Fragment>
  );
};

export default withStyles(styles)(CoverLetter);