import React from 'react';
import { Typography, Grid, withStyles } from '@material-ui/core';
import Job from './Templates/Education.js.js';

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#3d6a7a',
    color: '#fff'
  },
  title: {
    marginTop: 25,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  icon: {
    color: '#fff'
  },
  school:{
    fontWeight: 'bold'
  }
});

const RelevantEducation = (props) => {
  const { classes } = props;
  return (
    <div className={classes.main}>

      <Grid container spacing={8}>

        <Grid item xs={12}>
          <Typography className ={classes.title} variant="h6" gutterBottom>
            Relevant Education and Training
          </Typography>
        </Grid>

        <Job schoolName="Team Treehouse (Online)" 
              year="2019" 
              courseName="Full Stack JavaScript Techdegree" 
              topics="Topics: React, Node.js, Express, SQLite, MongoDB"
              class={classes}       
        />

        <Job schoolName="Udemy (Online)" 
              year="2018" 
              courseName="The Complete Web Developer Bootcamp & The Complete JavaScript Course" 
              topics="Topics: jQuery, JavaScript ES5/ES6, HTML5, CSS3"
              class={classes}       
        />

        <Job schoolName="College of the North Atlantic" 
              year="2000-2003" 
              courseName="Programmer Analyst (Business) Co-op" 
              topics="Topics: Oracle, Java, C++, Visual Basic"
              class={classes}       
        />
      </Grid>
    </div>
  );
};

export default withStyles(styles)(RelevantEducation);