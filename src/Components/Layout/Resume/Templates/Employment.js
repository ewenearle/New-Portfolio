import React, { Fragment } from 'react';
import { Typography, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Work from '@material-ui/icons/Work';

const Employment = (props) => {
  const { icon, school } = props.class;

  /* List items that are iterated and passed props from AdditionalEmployment.js & RelevantEmployment.js  */ 
 
  return (
   
    <ListItem>        
      <ListItemIcon >
        <Work className={icon}/>
      </ListItemIcon>
        <ListItemText primary={
          <Fragment>
            <Typography variant="body1" className={school}>
              {props.title}
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
   
  )
}

export default Employment;