import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GifPlayer from "react-gif-player";


import "./model.css";


const ModelGameProfile = (props) => {

  const selectedProfile = props.selectedProfile;
  return (
    <div className="modal"
      onClick = { () => props.closeModel()}
    >
      <Grid container spacing={5}  direction="row"
        justify="center"
        alignItems="center"
      >
        {
          selectedProfile && Array.isArray(selectedProfile)
          && selectedProfile.length >= 0 &&
          selectedProfile.map((profile) => {
              return(
                <Grid item xs key={profile.id}>
                  {/* <p>{profile.discription}</p> */}
                  <GameCard
                    pic={profile.pic}
                  />
                </Grid>
              )
            }
          )
        }
      </Grid>
      
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
    padding: theme.spacing(0),
    margin: 'auto',
    maxWidth: 800,
    backgroundColor: "black"
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

const GameCard = (props) => 
{
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" square >
        <Grid 
          container 
          spacing={3}  
          alignItems="center"
        >
          <Grid item >
            <div className={classes.image}>
              <GifPlayer className={classes.img} gift={props.pic} still={props.pic} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}


export default ModelGameProfile;