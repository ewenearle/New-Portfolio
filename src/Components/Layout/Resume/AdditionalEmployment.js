import React, { Fragment } from 'react'
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
})

const AdditionalEmployment = (props) => {
  const { classes } = props;
  const { constructionJobs, constructionTasks } = ResumeData;
  return (
    <Fragment>
      <Grid container spacing={16} className={classes.main}>
        <Grid item xs={12}>
          <Typography className ={classes.title} variant="h6" gutterBottom>
            Additional Employment Experience
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.responsiveGrid}>
          <List>

            {/* Pull required data from JSON file */}
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
        <Grid item xs={6} className={classes.responsiveGrid}>
          <List>         
            <ListItem>        
              <Typography variant="body1" className={classes.school}>
                Responsibilities:
              </Typography>
            </ListItem>

            {/* Pull required data from JSON file */}
            {constructionTasks.map((task, index) => {
              return (
                <Task description = {task.description} class = {classes} key = {index} />
              )
            })}
            
          </List>
        </Grid>

        {/* Other employment that didn't logically fit in the JSON file */}
        <Grid item xs={12}>
          <Divider />
        </Grid>=
        <Grid item xs={6} className={classes.responsiveGrid}>   
          <List>
            <Job jobTitle = "Water, Fuels, Environment Technician"
                  location = "Canadian Forces, Gander, NL"
                  year = "2005 - 2012"
                  class = {classes}
            />
          </List>
        </Grid>
        <Grid item xs={6} className={classes.responsiveGrid}>        
          <List>
            <Task description = "Operated water and wastewater treatment facilities" class = {classes} />
            <Task description = "Assisted carpenters in construction work for non-profit organizations" class = {classes} />
          </List>
        </Grid>  
      </Grid>
    </Fragment>
  )
}

export default withStyles(styles)(AdditionalEmployment);