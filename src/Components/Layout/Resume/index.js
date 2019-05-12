import React from 'react';
import { withStyles } from '@material-ui/core';
import Profile from './Profile'
 

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42',
    color: 'white'
  }
});

const Resume = (props) => {
  const { classes } = props;

  return (
    <div className={classes.main}>
      <Profile />
    </div>
  );
}

export default withStyles(styles)(Resume);