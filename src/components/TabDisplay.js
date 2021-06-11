import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#044153',
    boxShadow: "none"   
  },
  tab: {
    border: "3px solid rgb(192, 192, 192)",
    borderBottom: "none",
    backgroundColor: '#044153',
    margin:"1.5px",
    marginBottom: 0,
    fontSize: '19px',
    color: "white",
    '&.Mui-selected': {
      
      backgroundColor: "#076785",
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
        TabIndicatorProps={{style: {display: "none",}}}
        value={value}
        onChange={handleChange}
        textColor="inherit"
        centered
      >
        
        <Tab className={classes.tab} label={label.software}  />
        <Tab className={classes.tab} label={label.game} />
        
      </Tabs>
    </Paper>
  );
}