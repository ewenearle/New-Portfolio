import React, { Fragment } from 'react';
import { Typography, Grid, withStyles, List, ListItem } from '@material-ui/core';
import Job from './Templates/Employment';
import Task from './Templates/Tasks';
import ResumeData from './resume.json';

const styles = theme => ({
  main: {
    backgroundColor: '#333e42',
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
  school:{
    fontWeight: 'bold'
  },
  responsiveGrid:{
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      flexBasis: '100%',
      marginTop: -10
    }
  }
});

const RelevantEmployment = (props) => {
  const { classes } = props;
  const { computerJobs, computerTasks } = ResumeData;
  
  return (
    <Fragment>
      <Grid container spacing={16} className={classes.main}>
        <Grid item xs={12}>
          <Typography className ={classes.title} variant="h6" gutterBottom>
            Relevant Employment Experience
          </Typography>
        </Grid>
      
        <Grid item xs={6} className={classes.responsiveGrid}>
          <List>

            {/* Pull required data from JSON file */}
            
            {computerJobs.map((job, index) => {
              return (
                <Job title = {job.title} location = {job.location} year = {job.year} class = {classes} key = {index} />
              )
            })}
            
          </List>  
        </Grid>
        
        <Grid item xs={6} className={classes.responsiveGrid}>
          <List>
            <ListItem>        
              <Typography variant="body1" className={classes.school}>
                Responsibilities:
              </Typography>
            </ListItem> 

            {/* Pull required data from JSON file */}

            {computerTasks.map((task, index) => {
              return (
                <Task description = {task.description} class = {classes} key = {index} />
              )
            })}

          </List>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(RelevantEmployment);