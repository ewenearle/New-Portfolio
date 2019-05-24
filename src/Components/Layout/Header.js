import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Button, List, ListItem, Grid, SwipeableDrawer, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: '#b2b0b0',
      background: '#1a1a1a'
    },
    "fontFamily": "\"Merriweather Sans\", sans-serif",
    fontSize: 18
  },
  active: {
    color: '#b2b0b0'
  },
  nav:{
    justifyContent: 'center'
  },
  list: {
    width : 150,
    "fontFamily": "\"Merriweather Sans\", sans-serif",
    color: 'white',
  },
  center: {
    justifyContent: 'center'
  },
  icon: {
    cursor: 'pointer',
    '&:hover': {
      color: '#cecccc',
      background: '#1a1a1a'
    },
  }
});

class NavBar extends Component {

  state = {
    drawerActivate: false, 
    drawer: false
  };

  componentWillMount(){
    if (window.innerWidth <= 600) {
      this.setState({ drawerActivate:true });
    };

    window.addEventListener('resize', () =>{
      if (window.innerWidth <= 600) {
        this.setState({ drawerActivate:true });
      }
      else {
        this.setState({ drawerActivate:false })
      };
    });
  };

  smallNavBar = () => {
    const StyledDrawer = styled(SwipeableDrawer)` & > div + div {
      background-color: #1a1a1a;
    }`;
    
    const { center, icon, list } = this.props.classes

    return (
      <Fragment>
        <Grid container spacing={16}>
          <AppBar position="static">
            <Toolbar className={center} >
              <MenuIcon style={{marginTop: 8}} className={icon} onClick={()=>{this.setState({ drawer: true })}} />
            </Toolbar>
          </AppBar>
        </Grid>

        <StyledDrawer        
          open={this.state.drawer}
          onClose={()=>{this.setState({ drawer: false })}}
          onOpen={()=>{this.setState({ drawer: true })}} >
          
          <div
            className = {list}
            tabIndex={0}
            role="button"
            onClick={()=>{this.setState({ drawer: false })}}
            onKeyDown={()=>{this.setState({ drawer: false })}}>
            
          <List>
            <ListItem component={NavLink} to="/" button divider> Home </ListItem>
            <ListItem component={NavLink} to="/portfolio" button divider> Portfolio </ListItem>
            <ListItem component={NavLink} to="/resume" button divider> Resume </ListItem>
            {/* <ListItem component={NavLink} to="/coverletter" button divider> Cover Letter </ListItem> */}
            {/* <ListItem component={NavLink} to="/about" button divider> About Me </ListItem> */}
          </List>

         </div>
       </StyledDrawer>
      </Fragment>
    );
  };

  largeNavBar = () => {
    const { button, active, nav } = this.props.classes;
    return (
      <Fragment>
        <Grid container spacing={16}>
          <AppBar position="static">
            <Toolbar className={nav}>
              <Button component={NavLink} exact to="/" className={button} activeClassName={active} disableRipple>
                Home
              </Button>
              <Button component={NavLink} to="/portfolio" className={button} activeClassName={active} disableRipple>
                Portfolio
              </Button>
              <Button component={NavLink} to="/resume" className={button} activeClassName={active} disableRipple>
                Resume
              </Button>
              {/* <Button component={NavLink} to="/coverletter" className={button} activeClassName={active} disableRipple>
                Cover Letter
              </Button> */}
              {/* <Button component={NavLink} to="/about" className={button} activeClassName={active} disableRipple>
                About Me
              </Button> */}
            </Toolbar>
          </AppBar>
        </Grid>
      </Fragment>
    );
  };

  render() {
    return(
      <Fragment>
        {this.state.drawerActivate ? this.smallNavBar() : this.largeNavBar()}
      </Fragment>
    )
  };
};


export default withStyles(styles)(NavBar);