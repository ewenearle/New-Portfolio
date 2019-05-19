import React, { Fragment } from 'react';
import { Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import School from '@material-ui/icons/School';

function Education(props){
  const { icon, school, responsiveSchool, responsiveCourse, responsiveTitle } = props.class;

  /* List items that are iterated and passed props from RelevantEducation.js  */
  
  return ( 
    <Fragment>
      <Grid item xs={4} className={responsiveSchool}>
        <List>
          <ListItem>        
            <ListItemIcon >
              <School className={icon}/>
            </ListItemIcon>
            <ListItemText 
              primary={
                <React.Fragment>
                  <Typography className = {school} variant="body1">
                    {props.school}
                  </Typography>
                </React.Fragment>
              }
              secondary={props.year} 
              className={responsiveTitle}
            />
          </ListItem>
        </List>  
      </Grid>

      <Grid item xs={8} className={responsiveCourse}>
        <List>
          <ListItem>        
            <ListItemText 
              primary={
                <React.Fragment>
                  <Typography className = {school} variant="body1">
                    {props.course}
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

export default Education;

