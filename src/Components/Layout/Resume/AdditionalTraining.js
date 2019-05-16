import React from 'react'
import { Typography, Grid, withStyles, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import School from '@material-ui/icons/School';

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
  school: {
    fontWeight: 'bold'
  }
})

const AdditionalTraining = (props) => {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <Grid container spacing={8}>

        <Grid item xs={12}>
          <Typography className ={classes.title} variant="h6" gutterBottom>
            Additional Training
          </Typography>
        </Grid>

        <Grid item style={{marginRight:'5%'}}>
          <List>
            <ListItem>        
              <ListItemIcon >
                <School className={classes.icon}/>
              </ListItemIcon>
                <ListItemText primary={
                  <React.Fragment>
                    <Typography variant="body1" className={classes.school}>
                      First Aid, WHMIS
                    </Typography>
                    <Typography variant="body2">
                      Carpenters Millwright College
                    </Typography>
                    <Typography variant="body2">
                      Paradise, NL
                    </Typography>
                    <Typography variant="body2">
                      2018
                    </Typography>
                  </React.Fragment>    
                }
              />
            </ListItem>
          </List>
        </Grid>

        <Grid item>
          <List>
            <ListItem>        
              <ListItemIcon >
                <School className={classes.icon}/>
              </ListItemIcon>
                <ListItemText primary={
                  <React.Fragment>
                    <Typography variant="body1" className={classes.school}>
                      Journeyman Leadership Training
                    </Typography>
                    <Typography variant="body2">
                      Carpenters International Training Center
                    </Typography>
                    <Typography variant="body2">
                      Las Vegas, Nevada, U.S.A
                    </Typography>
                    <Typography variant="body2">
                      2014
                    </Typography>
                  </React.Fragment>    
                }
              />
            </ListItem>
          </List>
        </Grid>

        <Grid item>
          <List>
            <ListItem>        
              <ListItemIcon >
                <School className={classes.icon}/>
              </ListItemIcon>
                <ListItemText primary={
                  <React.Fragment>
                    <Typography variant="body1" className={classes.school}>
                      Scaffolding
                    </Typography>
                    <Typography variant="body2">
                      Carpenters Millwright College
                    </Typography>
                    <Typography variant="body2">
                      Paradise, NL
                    </Typography>
                    <Typography variant="body2">
                      2012
                    </Typography>
                  </React.Fragment>    
                }
              />
            </ListItem>
          </List>
        </Grid>

        <Grid item>
          <List>
            <ListItem>        
              <ListItemIcon >
                <School className={classes.icon}/>
              </ListItemIcon>
                <ListItemText primary={
                  <React.Fragment>
                    <Typography variant="body1" className={classes.school}>
                      Enlisted Military Education
                    </Typography>
                    <Typography variant="body2">
                      Knoxville, Tennessee, U.S.A
                    </Typography>
                    <Typography variant="body2">
                      McGhee Tyson Air Nation Guard Base
                    </Typography>
                    <Typography variant="body2">
                      2012
                    </Typography>
                  </React.Fragment>    
                }
              />
            </ListItem>
          </List>
        </Grid>

        <Grid item>
          <List>
            <ListItem>        
              <ListItemIcon >
                <School className={classes.icon}/>
              </ListItemIcon>
                <ListItemText primary={
                  <React.Fragment>
                    <Typography variant="body1" className={classes.school}>
                      Water, Fuels, Environment Technician
                    </Typography>
                    <Typography variant="body2">
                      Canadian Forces School of Engineering
                    </Typography>
                    <Typography variant="body2">
                      Oromocto, NB
                    </Typography>
                    <Typography variant="body2">
                      2012
                    </Typography>
                  </React.Fragment>    
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(AdditionalTraining)