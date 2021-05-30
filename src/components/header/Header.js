import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import picProfile from "./AvatarPic.png";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const linkInSite = "https://www.linkedin.com/in/muhanad-tello";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: theme.spacing(0),
  },
 
  pic: {
    width: "300px",
    height: "300px",
    // left: "15%",
    // textAlign: "center"
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textTittel: {
    //backgroundColor: theme.palette.background.paper,
    color: "black",
    textAlign: "center",
    width: "100%",
    margin: theme.spacing(1),
  }
}));

const Header = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Container maxWidth="sm" >
        <Avatar alt="#MuhanadTello" src= {picProfile} className={classes.pic} />
        
        <Typography  
          className={classes.textTittel}  
          variant="h2"
          align = "left"
          >
          Muhanad Tello
        </Typography>
        <Typography 
          className={classes.textTittel}  
          variant="h4"
          align = "left"
          >
          Game Programmer
        </Typography>
        <Typography 
          className={classes.textTittel}  
          variant="h4"
          align = "left"
          >
          Software Developer
        </Typography>
        <Typography 
          className={classes.textTittel}  
          variant="subtitle1"
          align = "left"
          >
          muhtello@gmail.com
        </Typography>
        <LinkedInIcon  fontSize="large"
        onClick={()=> window.open(linkInSite)}
        
        />
      </Container>
    </div>
  )
}
// class Header extends Component 
// {
//   render()
//   {
//     return(
//       <div>
//         fsdfsdfsdfsdf
//       </div>
//     )
//   }
// }


export default Header;