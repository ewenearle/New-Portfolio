import React from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2,
    color: 'white',
    '&:hover': {
      background: '#233237',
    position: 'relative'
   },  
  },
  nav: {
    justifyContent: 'center'
  }
});

const ButtonAppBar = (props) => {
  const { classes } = props;
 
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.nav}>

          <Button component={Link} to="/" className={classes.button} disableRipple>
            Resume
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(ButtonAppBar);