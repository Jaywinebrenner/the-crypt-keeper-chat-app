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



const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    padding: theme.spacing(3, 2),
    margin: "50px",
  },
  flex: {
    display: "flex",
    alignItems: 'center' //will align items vertically
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
    padding: '20px',
    width: '70%',
    height: '300px'
  },
  chatBox: {
    width: "85%"
  },
  button: {
    width: '15%'
  },
  input: {
    marginRight: "5px",
    width: "200px"
  },
  button: {
    height: "55px",
    width: "100px",
    marginLeft: "10px"
  }
}));

const Dashboard = () => {


  const array = ["fart", 'poop', 'pee', 'strawberry', 'peach']
  const classes = useStyles();
  const [textValue, setTextValue] = useState('')
  
  console.log(textValue);

  return (
    <Paper className={classes.root} elevation={3}>
      <img className={classes.cryptKeeper} src={Logo}></img>
      <Typography variant="h3">The Crypt Keeper Chat App</Typography>
      <Typography variant="p">
        EnCRYPTed chat for your fiends and family
      </Typography>

      <Typography variant="h5">Topic Placeholder</Typography>

      <div className={classes.flex}>
        <div className={classes.topicsWindow}>
          <List>
            {array.map((topic) => (
              <ListItem key={topic} button>
                <ListItemText primary={topic} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.chatWindow}>
          {[{ from: "user", msg: "greetings" }].map((chat, i) => (
            <div className={classes.flex} key={i}>
              <Chip label={chat.from} className={classes.chip} />
              <Typography variant="p">{chat.msg}</Typography>
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