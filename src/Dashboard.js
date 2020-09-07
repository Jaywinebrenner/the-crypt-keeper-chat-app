import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from './media/cryptkeeper.jpg';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    padding: theme.spacing(3, 2),
    margin: "50px",
  },
  flex: {
    display: "flex",
  },
  cryptKeeper: {
    height: "120px",
    display: "absolute",
    borderRadius: '50%'
  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid gray'
  },
  chatWindow: {
    width: '70%',
    height: '300px'
  },
  chatBox: {
    width: "85%"
  },
  button: {
    width: '15%'
  },
}));

const Dashboard = () => {

  const classes = useStyles();

  return (

      <Paper className={classes.root} elevation={3}>


        <img className={classes.cryptKeeper}src={Logo}></img>
        <Typography variant="h3">The Crypt Keeper Chat App</Typography>
        <Typography variant="p">
          EnCRYPTed chat for your fiends and family
        </Typography>

        <Typography variant="h5">Topic Placeholder</Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}></div>
          <div className={classes.chatWindow}></div>

        </div>

        <div></div>
      </Paper>
  );
}

export default Dashboard