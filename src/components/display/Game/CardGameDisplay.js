import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 400,
    
  },
  media: {
    height: 240,
    paddingTop: '20.25%', // 16:9
  },
  footer: {
    textAlign: "left",
    //color: "blue"
  }

}));

export default function CardGameDisplay(props) {

  const classes = useStyles();
  const {image, header, discreption, gameEngine, script} = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {header}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {discreption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider light variant="fullWidth"/>
      <List>
        <ListItem>
          <ListItemText className={classes.footer} secondary={"Game Engine: " + gameEngine}/>
          <ListItemText className={classes.footer} secondary={"script: " + script} />
        </ListItem>
      </List>
      <Divider light variant="fullWidth"/>
      <CardActions disableSpacing>
        <Button size="small" color="primary">View</Button>
      </CardActions>
    </Card>
  );
}