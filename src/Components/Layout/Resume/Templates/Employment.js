import React, { Fragment } from 'react';
import { Typography, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Work from '@material-ui/icons/Work';

function Employment(props){
  const { icon, school } = props.class;
  return (
    <Fragment>
      <ListItem>        
        <ListItemIcon >
          <Work className={icon}/>
        </ListItemIcon>
          <ListItemText primary={
            <React.Fragment>
              <Typography variant="body1" className={school}>
                {props.title}
              </Typography>
              <Typography variant="body2">
                {props.location}
              </Typography>
              <Typography variant="body2">
                {props.year}
              </Typography>
            </React.Fragment>    
          }
        />
      </ListItem>
    </Fragment>
  )
}

export default Employment;