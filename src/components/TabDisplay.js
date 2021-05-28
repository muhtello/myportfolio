import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#646464',
    padding: "10px",
    boxShadow: "none"
    //border: "3px solid rgb(192, 192, 192)",
    
    
  },
  tab: {
    border: "3px solid rgb(192, 192, 192)",
    backgroundColor: '#646464',
    margin:"1vh",
    marginBottom: 0,
    '&.Mui-selected': {
      backgroundColor: '#283431e3',
      color: "rgb(192, 192, 192)"
    },
  }
});

export default function TabDisplay(props) {
  const classes = useStyles();
  const label = props.label
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleTabChange(newValue);
  };
 
  return (
    <Paper className={classes.root}>
      <Tabs
        TabIndicatorProps={{style: {background:'white',  display: "none",}}}
        value={value}
        onChange={handleChange}
        //indicatorColor="primary"
        textColor="inherit"
        centered
      >
        
        <Tab className={classes.tab} label={label.software} />
        <Tab className={classes.tab} label={label.game} />
        
      </Tabs>
    </Paper>
  );
}