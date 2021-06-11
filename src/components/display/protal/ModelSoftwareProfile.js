import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReactPlayer from 'react-player/lazy'

import "./model.css";

const ModelSoftwareProfile = (props) => {
  const selectedProfile = props.selectedProfile;
  
  
  return (
    <div
      className="modal"
      onClick = { () => props.closeModel()}
    >
      <SoftwareCard 
        src={selectedProfile.src}
        type= {selectedProfile.type}
      
      />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
    display: 'flex',
    flexWrap: 'wrap',
    
    
  },
  paper: {
    padding: theme.spacing(0.5),
    margin: 'auto',
    //maxWidth: 900,

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
  let selectedElement;
  const src= props.src;
  const type = props.type;

  if (type === "video")
  {
    selectedElement = <ReactPlayer url={src} controls/>
  }
  else if (type=== "link"){
    selectedElement = null;
  }
  else{
    selectedElement = <img  src={src} alt={"#" + src} width="500" height="333"/>
  }
  // switch(type){
  //   case "video":
  //   selectedElement = <ReactPlayer url={url} controls/>
  //   break;
  //   case "pic":
  //     selectedElement = <img  src={url} alt={"#" + url} width="500" height="333"/>
  //   default:
  //     selectedElement = <p>there are no </p>
  //   break;
  // }

  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Paper  
        className={classes.paper}
        variant="outlined" square 
      >
        {selectedElement}
        
      </Paper>
    </div>
  )
}


export default ModelSoftwareProfile;