import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import "./model.css";

const ModelSoftwareProfile = (props) => {
  const selectedProfile = props.selectedProfile;
  
  return (
    <div
      className="modal"
      onClick = { () => props.closeModel()}
    >
      <p>model</p>
      <SoftwareCard />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
    
    //backgroundColor: "red"
  },
  image: {
    width: 528,
    height: "auto",
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


const SoftwareCard = (props) => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Paper  
        className={classes.paper}
        variant="outlined" square 
      >
      
        <p>dsklfjsdklfjsdklfjdsklf</p>
        
      </Paper>
    </div>
  )
}


export default ModelSoftwareProfile;