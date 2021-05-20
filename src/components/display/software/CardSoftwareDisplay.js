import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 400,
    
  },
  title: {
    fontSize: 14,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));


export default function CardSoftwareDisplay(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  const { header, discreption, view} = props;

  return (
    <Card className={classes.root}>
     <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {header}
      </Typography>
      <Typography variant="h5" component="h2">
        {discreption}
      </Typography>
     </CardContent>
     <CardActions disableSpacing>
     <Button 
        size="small" 
        color="primary"
        onClick = {() => handleExpandClick()}
      >
        View
      </Button>
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        
     </CardActions>
     <Collapse
      in={expanded} 
      timeout="auto" 
      unmountOnExit
     >
      <CardActions>
        {view && view.length > 0 && view.map((v, i) =>
            {
              return(
                <Button
                  key={i}
                  onClick = {(e) => props.handleViewClick(e, v.action)}
                >
                  {v.label}
                </Button>
              )
            }
          )
        }
      </CardActions>
     
     </Collapse>
    </Card>
  );
}