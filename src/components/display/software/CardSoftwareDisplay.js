import React from 'react';
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 400,
    
  },
  info: {
    textAlign: "left",
    paddingTop: 0,
    paddingBottom: 0,  
    
  },
  inlineList: {
    display: 'inline',
  },


}));


export default function CardSoftwareDisplay(props) {

  const classes = useStyles();
  const { header, discreption, view, info} = props;
  const colorText = "#076785";
  return (
    <Card className={classes.root} variant="outlined">
     <CardContent>
        <Typography variant="h5" component="h2"  gutterBottom style={{color: colorText}}>
          {header}
        </Typography>
        <Typography 
          variant="body1" 
        >
          {discreption}
        </Typography>
     </CardContent>
     <Divider light variant="fullWidth"/>
      <List>
        {info && info.length > 0 && info.map((inf, index) => 
            {
              return(
                <ListItem key={index} className={classes.info}>
                  <ListItemText
                    secondary = {
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inlineList}
                          color="textPrimary"
                        >
                          {inf.label + ": "}
                        </Typography>
                        {inf.value}
                      </React.Fragment>
                    }
                  
                  />
                </ListItem>
              )
            }
          )
        }  
      </List>
      <Divider light variant="fullWidth"/>
     <CardActions disableSpacing>
      <Button 
        size="large"
        //color="primary" 
        style={{color: colorText}}
        onClick = {(e) => props.handleViewClick(e, view)}
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