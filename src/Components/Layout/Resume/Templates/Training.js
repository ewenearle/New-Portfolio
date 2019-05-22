import React, { Fragment } from 'react';
import { Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import School from '@material-ui/icons/School';

function Training(props){
  const { icon, school } = props.class;
  

  /* List items that are iterated and passed props from AdditionalTraining.js */ 

  return (
    <Fragment>
      <Grid item lg={4}>
        <List>
          <ListItem>        
            <ListItemIcon >
              <School className={icon}/>
            </ListItemIcon>
              <ListItemText primary={
                <Fragment>
                  <Typography variant="body1" className={school}>
                    {props.name}
                  </Typography>
                  <Typography variant="body2">
                    {props.school}
                  </Typography>
                  <Typography variant="body2">
                    {props.location}
                  </Typography>
                  <Typography variant="body2">
                    {props.year}
                  </Typography>
                </Fragment>    
              }
            />
          </ListItem>
        </List>
      </Grid>
    </Fragment>
  );
};

export default Training;