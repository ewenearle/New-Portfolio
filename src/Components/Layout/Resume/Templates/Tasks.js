import React from 'react';
import { Typography, ListItem, ListItemIcon } from '@material-ui/core';
import Lens from '@material-ui/icons/Lens';

const Tasks = (props) => {

  /* List items that are iterated and passed props from AdditionalEmployment.js & RelevantEmployment.js  */ 

  return ( 
  
    <ListItem> 
      <ListItemIcon>
        <Lens className={props.class.bullet}/>
      </ListItemIcon>       
      <Typography variant="body2">
        {props.description}
      </Typography>
    </ListItem>
   
  );
};

export default Tasks;