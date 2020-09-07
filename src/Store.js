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

const Store = (props) => {

  if (!socket) {
    socket = io(':3001')
  }

const reducerHook = React.useReducer(reducer, initialState)

  return (
    <CTX.Provider value={reducerHook}>
      {props.children}
    </CTX.Provider>
  )
}

export default Store