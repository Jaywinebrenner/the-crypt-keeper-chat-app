import React from 'react';
import io from 'socket.io-client'

export const CTX = React.createContext();


const initialState = {
  Puns: [
    { from: "The Crypt Keeper", msg: "Greetings" },
    { from: "Dracula", msg: "I vant to suck your blood" },
    { from: "Igor", msg: "Masthter!" },
  ],
  Recipies: [
    { from: "Mummy", msg: "Ugg" },
    { from: "Goblin", msg: "I'm hungry" },
    { from: "Reggie", msg: "When is Press Your Luck on?" },
  ],
};

const reducer = (state, action) => {
  const {from, msg, topic} = action.payload;
  switch(action.type) {
    case 'RECEIVE_MESSAGE':
      return{
          ...state,
          [topic]: [
            ...state[topic],
            {
              from: from,
              msg: msg
            }
          ]
      }
  }
}




let socket; 

const sendChatAction = (value) => {
  socket.emit("chat message", value);
};

const Store = (props) => {

  if (!socket) {
    socket = io(':3001')
  }

  // const user = ["Count Dracula", "The Mummy", "The Crypt Keeper", "Leprechaun", "Meredith Brooks"]

  const user = "Meredith Brooks" + Math.random(100).toFixed(2)

const [allChats] = React.useReducer(reducer, initialState)

  return (
    <CTX.Provider value={{allChats, sendChatAction, user}}>
      {props.children}
    </CTX.Provider>
  )
}

export default Store