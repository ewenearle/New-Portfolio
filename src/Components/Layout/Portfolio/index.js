import React, { Fragment } from 'react';
import { Grid, withStyles, Link, Typography } from '@material-ui/core';
import ProjectData from './projects.json'
import Project from './template.js'

const styles = theme => ({
  main: {
    backgroundColor: '#333e42', 
    paddingBottom: 20
  },
  project: {
    marginTop: 20,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      flexBasis: '100%',
      marginBottom: 0
    },
  },
  card: {
    maxWidth: 400,
    backgroundColor: '#f7f7f7',
    display: 'inline-block',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 350
    },
  },
  image: {
    height: 0,
    paddingTop: '50%',
    margin: 3
  },
  courseTitle: {
    color: 'black',
    marginTop: -10,
  },
  description: {
    color: 'black',
    textAlign: 'left',
    "fontFamily": "\"Work Sans\", sans-serif",
  },
  mainTitle: {
    textAlign: 'center',
    "fontFamily": "\"Merriweather Sans\", sans-serif",
    marginTop: 20,
    marginBottom: 30
  }
});

const Projects = (props) => {
  const { main, mainTitle } = props.classes;
  const { projects } = ProjectData

  return (
    <Fragment>
      <Grid container spacing={16} className={main}>
        
        <Grid item xs={12}>
          <Typography className={mainTitle} variant="h4">
            My Projects
          </Typography>
        </Grid>

        {/* Pull required data from JSON file */}
        
        {projects.map((project, index) => {
          console.log(index)
          return (
            <Project title={project.title}
                     description={project.description}
                     class={props.classes}
                     image={require(`../../../images/project${index}.png`)}
                     key={index}
            />
          )
        })}

      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(Projects);