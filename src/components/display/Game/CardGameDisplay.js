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
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';


const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 400,
    
  },
  media: {
    height: 240,
    paddingTop: '20.25%', // 16:9
  },
  info: {
    textAlign: "left",
    paddingTop: 0,
    paddingBottom: 0,  
    
  },
  inlineList: {
    display: 'inline',
  }

}));

export default function CardGameDisplay(props) {

  const classes = useStyles();
  const {image, header, discreption, gameEngine, script} = props;
  const colorText = "#076785";
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color: colorText}}>
            {header}
          </Typography>
          <Typography variant="body1" >
           {discreption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider light variant="fullWidth"/>
      <List >
        <ListItem className={classes.info}>
          <ListItemText
            secondary = {
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inlineList}
                  color="textPrimary"
                >
                  Game Engine:  
                </Typography>
                {" " + gameEngine}
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem className={classes.info}>
          <ListItemText
            secondary = {
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inlineList}
                  color="textPrimary"
                >
                  Script:  
                </Typography>
                {" " + script}
              </React.Fragment>
            }
          />
        </ListItem>
        {/* <ListItem>
          <ListItemText className={classes.footer} secondary={"Game Engine: " + gameEngine}/>
          <ListItemText className={classes.footer} secondary={"Script: " + script} />
        </ListItem> */}
      </List>
      <Divider light variant="fullWidth"/>
      <CardActions disableSpacing>
        <Button 
          size="large" 
          style={{color: colorText}}
          endIcon = {
            <VisibilityOutlinedIcon style={{color: colorText}} />
          }
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}