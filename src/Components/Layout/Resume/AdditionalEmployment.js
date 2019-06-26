import React from 'react'
import { Typography, Grid, withStyles, List } from '@material-ui/core';
import Job from './Templates/Employment';
import Task from './Templates/Tasks';

const styles = theme => ({
  main: {
    backgroundColor: '#3d6a7a'
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

const AdditionalEmployment = (props) => {
  const { classes } = props;
  
  return (
    
    <Grid container spacing={16} className={classes.main}>
      <Grid item xs={12}>
        <Typography className ={classes.title} variant="h6" gutterBottom>
          Additional Employment Experience
        </Typography>
      </Grid>
     
      <Grid item xs={6} className={classes.responsiveGrid}>   
        <List>
          <Job jobTitle = "Scaffolder"
                location = "Carpenters Union, Paradise, NL"
                year = "2012 - 2018"
                class = {classes}
          />
        </List>
      </Grid>

      <Grid item xs={6} className={classes.responsiveGrid}>        
        <List>
          <Task description = "Foreman for maintenance of Holyrood Electric Generating Station" class = {classes} />
          <Task description = "Trained work term students on erecting scaffolds" class = {classes} />
        </List>
      </Grid> 

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
   
  )
}

export default withStyles(styles)(AdditionalEmployment);