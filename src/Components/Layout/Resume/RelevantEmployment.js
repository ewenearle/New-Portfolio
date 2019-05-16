import React from 'react'
import { Typography, Grid, withStyles, List, ListItem } from '@material-ui/core';
import Job from './Templates/Employment';
import Task from './Templates/Tasks';
import ResumeData from './resume.json'

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42',
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
  bullet: {
    color: '#fff',
    width: 10,
    height: 10
  },
  school:{
    fontWeight: 'bold'
  }
});

const RelevantEmployment = (props) => {
  const { classes } = props;
  const { computerJobs, computerTasks } = ResumeData;
  
  return (
    <div className={classes.main}>
      <Grid container spacing={8}>

        <Grid item xs={12}>
          <Typography className ={classes.title} variant="h6" gutterBottom>
            Relevant Employment Experience
          </Typography>
        </Grid>
      
        <Grid item xs={6}>
          <List>
            {computerJobs.map((job, index) => {
              return (
                <Job title = {job.title} location = {job.location} year = {job.year} class = {classes} key = {index} />
              )
            })}
          </List>  
        </Grid>
        
        <Grid item xs={6}>
          <List>
            <ListItem>        
              <Typography variant="h6" className={classes.school}>
                Responsibilities:
              </Typography>
            </ListItem> 
            {computerTasks.map((task, index) => {
              return (
                <Task description = {task.description} class = {classes} key = {index} />
              )
            })}           
          </List>
        </Grid>

      </Grid>
    </div>
  )
}

export default withStyles(styles)(RelevantEmployment)