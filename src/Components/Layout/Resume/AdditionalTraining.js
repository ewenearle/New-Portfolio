import React, { Fragment } from 'react';
import { Typography, Grid, withStyles } from '@material-ui/core';
import Course from './Templates/Training';
import ResumeData from './resume.json'

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42',
    color: '#fff'
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    color: '#ededed',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  icon: {
    color: '#fff'
  },
  bullet: {
    color: '#fff',
    width: 10,
    height: 10
  },
  school: {
    fontWeight: 'bold'
  }
});

const AdditionalTraining = (props) => {
  const { classes } = props;
  const { otherTraining } = ResumeData;
  return (
    <Fragment>
      <Grid container spacing={24} className={classes.main}>

        <Grid item xs={12}>
          <Typography className ={classes.title} variant="h6" gutterBottom>
            Additional Training
          </Typography>
        </Grid>
         
        { otherTraining.map((course, index) => {    
          return (
            <Course name={course.name}
                school={course.school}
                location={course.location}
                year={course.year}
                class={classes}
                key={index}
                // style={index === 0 ? { marginRight: "5.2%" } : {}}      
            />
          )
        })}

      </Grid>
    </Fragment>
  )
}

export default withStyles(styles)(AdditionalTraining);
