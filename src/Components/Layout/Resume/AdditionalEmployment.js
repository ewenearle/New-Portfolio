import React from 'react'
import { Typography, Grid, withStyles, List, ListItem, Divider } from '@material-ui/core';
import Job from './Templates/Employment';
import Task from './Templates/Tasks';
import ResumeData from './resume.json'

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
    fontWeight: 'bold',
    textDecoration: 'underline'
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
})

const AdditionalEmployment = (props) => {
  const { classes } = props;
  const { constructionJobs, constructionTasks } = ResumeData;
  return (
    <div className={classes.main}>
      <Grid container spacing={8}>

        <Grid item xs={12}>
          <Typography className ={classes.title} variant="h6" gutterBottom>
            Additional Employment Experience
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <List>
            {constructionJobs.map((job, index) => {
              return (
                <Job title = {job.title}
                  location = {job.location}
                  year = {job.year}
                  class = {classes}
                  key = {index}
                />
              )
            })}
          </List>  
        </Grid>
        
        <Grid item xs={6}>
          <List>         
            <ListItem>        
              <Typography variant="body1" className={classes.school}>
                Responsibilities:
              </Typography>
            </ListItem>

            {constructionTasks.map((task, index) => {
              return (
                <Task description = {task.description} class = {classes} key = {index} />
              )
            })}
            
          </List>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={6}>   
          <List>
            <Job jobTitle = "Water, Fuels, Environment Technician"
                  location = "Canadian Forces, Gander, NL"
                  year = "2005 - 2012"
                  class = {classes}
            />
          </List>
        </Grid>

        <Grid item xs={6}>        
          <List>
            <Task description = "Operated water and wastewater treatment facilities" class = {classes} />
            <Task description = "Assisted carpenters in construction work for non-profit organizations" class = {classes} />
          </List>
        </Grid>  
      </Grid>
    </div>
  )
}

export default withStyles(styles)(AdditionalEmployment);