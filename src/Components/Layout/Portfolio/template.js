import React, { Fragment } from 'react';
import { Grid, Link, Typography, Card, CardMedia, CardContent } from '@material-ui/core';

function Projects(props){
  const {project, card, image, courseTitle, description} = props.class
 
  return(
    <Fragment>
      <Grid item xs={6} className={project}>
        <Card className={card}>     
          <CardMedia className={image} image={props.image} title="Project1"/>
          <CardContent>
            <Typography className={courseTitle} gutterBottom variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle2" className={description}>
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  )
}

export default Projects