import React from 'react';
import { Typography, Grid, withStyles } from '@material-ui/core';
import Course from './Templates/Education';
import ResumeData from './resume.json';

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#3d6a7a',
    color: '#fff'
  },
  title: {
    marginTop: 25,
    marginBottom: 20,
    color: '#ededed',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'  
  },
  icon: {
    color: '#fff'
  },
  school:{
    fontWeight: 'bold'
  },
  responsiveGrid:{
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      flexBasis: '100%',
      marginTop: -10
    },
  },
  responsiveTitle:{
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0
    }
  }
});

const RelevantEducation = (props) => {
  const { classes } = props;
  const { courses } = ResumeData;
  
  return (
    <div className={classes.main}>

      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography className ={classes.title} variant="h6" gutterBottom>
            Relevant Education and Training
          </Typography>
        </Grid>

        {courses.map((course, index) => {
          return (
            <Course school={course.name} 
                year={course.year} 
                course={course.course} 
                topics={course.topics}
                class={classes}
                key={index}
            />
          )
        })}

      </Grid>
    </div>
  );
};

export default withStyles(styles)(RelevantEducation);