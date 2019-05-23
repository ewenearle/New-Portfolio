import React, { Fragment } from 'react';
import { Grid, withStyles, Link, Typography, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import project1 from '../../images/test2.png'

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42', 
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    height: '100vh'  
  },
  icon: {
    color: '#fff',
    width: 50,
    height: 50
  },
  link: {
    color: '#fff',
    '&:hover': {
      textDecoration: "none",
   }
  },
  card: {
    maxWidth: 400,
    backgroundColor: '#f7f7f7'
  },
  media: {
    height: 0,
    paddingTop: '50%',
    margin: 5
  },
  test: {
    color: 'black'
  }
});

const Projects = (props) => {
  const { classes } = props;
  return (
    <Fragment >
      <Grid container spacing={16} className={classes.main}>
        <Grid item xs={12} className={classes.title}>
        <Card className={classes.card}>
          
          <CardMedia
          className={classes.media}
          image={project1}
          title="Project1"
          />
        <CardContent>
          <Typography style={{color: 'black'}}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        </Card>
          
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(Projects);