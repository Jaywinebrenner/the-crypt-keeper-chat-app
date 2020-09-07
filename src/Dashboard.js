import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from './media/cryptkeeper.jpg';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Store, {CTX} from './Store'



const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    padding: theme.spacing(3, 2),
    margin: "50px",
  },
  flex: {
    display: "flex",
    alignItems: "center", //will align items vertically
  },
  cryptKeeper: {
    height: "120px",
    display: "absolute",
    borderRadius: "50%",
  },
  topicsWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid gray",
  },
  chatWindow: {
    padding: "20px",
    width: "70%",
    height: "300px",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
    marginLeft: "10px",
    height: "55px",
  },
  input: {
    marginRight: "5px",
    width: "200px",
  },
}));

  const Dashboard = () => {

    let audio = new Audio("/laugh.mp3");
    const makeLaugh = () => {
      audio.play();
    };

    
    // CTX Store
  const [allChats] = React.useContext(CTX)
  console.log("All Chats", allChats);
  
  const topics = Object.keys(allChats);

  const classes = useStyles();

  // Local State
  const [textValue, setTextValue] = useState('')
  const [activeTopic, setActiveTopic] = useState(topics[0])

  return (
    <Paper className={classes.root} elevation={3}>
        <img
          onClick={makeLaugh}
          className={classes.cryptKeeper}
          src={Logo}
        />
      <Typography variant="h3">The Crypt Keeper Chat App</Typography>
      <Typography variant="p">
        EnCRYPTed chat for your fiends and family
      </Typography>

      <Typography variant="h5">{activeTopic}</Typography>

      <div className={classes.flex}>
        <div className={classes.topicsWindow}>
          <List>
            {topics.map((topic) => (
              <ListItem
                onClick={(e) => setActiveTopic(e.target.innerText)}
                key={topic}
                button
              >
                <ListItemText primary={topic} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.chatWindow}>
          {allChats[activeTopic].map((chat, i) => (
            <div className={classes.flex} key={i}>
              <Chip label={chat.from} className={classes.chip} />
              <Typography variant="body1" gutterBottom>
                {chat.msg}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.flex}>
        <TextField
          // required
          className={classes.chatBox}
          label="Send a message"
          onChange={(e) => setTextValue(e.target.value)}
          value={textValue}
          variant="filled"
        />
        <Button className={classes.button} variant="contained" color="primary">
          Send
        </Button>
      </div>
    </Paper>
  );
}

export default Dashboard