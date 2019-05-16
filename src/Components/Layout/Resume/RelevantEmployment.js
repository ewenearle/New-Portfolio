import React from 'react'
import { Typography, Grid, withStyles, List, ListItem } from '@material-ui/core';
import Job from './GridTemplates/Employment';
import Task from './GridTemplates/Tasks';

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
})

const RelevantEmployment = (props) => {
  const { classes } = props;
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
            <Job jobTitle = "Computer Support"
                location = "NL Public Library, Summerford, NL"
                year = "2004"
                class = {classes}
            />

            <Job jobTitle = "Work Term III Placement"
                location = "Department of Mines and Energy, St. John's, NL"
                year = "2003"
                class = {classes}
            />

            <Job jobTitle = "Work Term II Placement"
                location = "Unversity of Aberdeen, Aberdeen, Scotland"
                year = "2002"
                class = {classes}
            />

            <Job jobTitle = "Work Term I Placement"
                location = "School District Board Office, Gander, NL"
                year = "2002"
                class = {classes}
            />
          </List>  
        </Grid>
        
        <Grid item xs={6}>
          <List>
            <ListItem>        
              <Typography variant="h6" className={classes.school}>
                Responsibilities:
              </Typography>
            </ListItem>            
            <Task description = "Web design, development and administration" class = {classes} />
            <Task description = "Software, hardware, network support and troubleshooting" class = {classes} />
            <Task description = "Technical support and training for students and staff" class = {classes} />
            <Task description = "Technologies used: Adobe, Microsoft Office and WebCT" class = {classes} />
          </List>
        </Grid>

      </Grid>
    </div>
  )
}

export default withStyles(styles)(RelevantEmployment)