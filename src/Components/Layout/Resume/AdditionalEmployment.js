import React from 'react'
import { Typography, Grid, withStyles, List, ListItem, Divider } from '@material-ui/core';
import Job from './Templates/Employment';
import Task from './Templates/Tasks';

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
            <Job jobTitle = "Scaffolder"
                location = "BrandSafway, Paradise, NL"
                year = "2014 - 2018"
                class = {classes}
            />

           <Job jobTitle = "Scaffolder"
                location = "Long Harbour Processing Plant, Long Harbour, NL"
                year = "2013 - 2014"
                class = {classes}
            />

            <Job jobTitle = "Scaffolder"
                location = "Iron Ore Company of Canada, Labrador City, Labrador"
                year = "2012"
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
            <Task description = "Erected, modified and dismantled scaffolding" class = {classes} />
            <Task description = "Foreman for various jobs. Zero safety incidents" class = {classes} />
            <Task description = "Trained work term students on erecting scaffolds" class = {classes} />
            <Task description = "Assessed scaffolding jobs on construction sites" class = {classes} />
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

export default withStyles(styles)(AdditionalEmployment)