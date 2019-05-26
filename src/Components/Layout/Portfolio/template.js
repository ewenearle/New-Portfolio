import React, {Fragment} from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, CardActionArea } from '@material-ui/core';

const Projects = (props) => {
  const {project, card, image, courseTitle, description} = props.class
 
  return(
    
    <Grid item xs={6} className={project}>

      <Card className={card}>  
      <CardActionArea>
        <CardMedia 
          className={image} 
          image={props.image} 
          title={props.title} 
          component="a" 
          href={props.link} 
          target="_blank"
        />    

        <CardContent>
          <Typography className={courseTitle} gutterBottom variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle2" className={description}>
            {props.description}
          </Typography>
          
        </CardContent>
        </CardActionArea>
      </Card>
      
    </Grid>
    
  )
}

export default Projects