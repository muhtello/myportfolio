import React from 'react';
import clsx from 'clsx';
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
  // expand: {
  //   transform: 'rotate(0deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },

}));


export default function CardSoftwareDisplay(props) {

  const classes = useStyles();
  const { header, discreption, view, info} = props;

  return (
    <Card className={classes.root}>
     <CardContent>
        <Typography variant="h5" component="h2"  gutterBottom>
          {header}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
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
        size="small" 
        color="primary"
        onClick = {(e) => props.handleViewClick(e, view)}
      >
        View
      </Button>
     </CardActions>

    </Card>
  );
}