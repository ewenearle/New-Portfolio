import React, { Fragment } from 'react';
import { Typography, ListItem, ListItemIcon } from '@material-ui/core';
import Lens from '@material-ui/icons/Lens';

function Tasks(props){
  const { bullet } = props.class
  return ( 
    <Fragment>
      <ListItem> 
        <ListItemIcon >
          <Lens className={bullet}/>
        </ListItemIcon>       
        <Typography variant="body2">
          {props.description}
        </Typography>
      </ListItem>
    </Fragment>
  );
};

export default Tasks;