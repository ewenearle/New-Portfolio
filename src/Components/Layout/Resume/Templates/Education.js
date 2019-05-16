import React, { Fragment } from 'react';
import { Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import School from '@material-ui/icons/School';

function Grids(props){
  const { icon, school } = props.class
  return (
    
    <Fragment>
      <Grid item xs={4}>
        <List>
          <ListItem>        
            <ListItemIcon >
              <School className={icon}/>
            </ListItemIcon>
            <ListItemText 
              primary={
                <React.Fragment>
                  <Typography className = {school} variant="body1">
                    {props.schoolName}
                  </Typography>
                </React.Fragment>
              }
              secondary={props.year} 
            />
          </ListItem>
        </List>  
      </Grid>

      <Grid item xs={8}>
        <List>
          <ListItem>        
            <ListItemText 
              primary={
                <React.Fragment>
                  <Typography className = {school} variant="body1">
                    {props.courseName}
                  </Typography>
                </React.Fragment>
              }
              secondary={props.topics}
            />
          </ListItem>
        </List>
      </Grid>
    </Fragment>
  );
};

export default Grids;

