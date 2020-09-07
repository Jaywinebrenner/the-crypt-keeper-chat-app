import React from 'react';

const CTX = React.createContext();


// msg {
//   from: 'user'
//   msg: 'hi'
//   topic: 'general'
// }

// state {
//   general: [
//     {msg}, {msg}, {msg}
//   ]
//   vampires: [
//     {msg}, {msg}, {msg}
//   ]
// }

const initialState = {
  ghouls: [
    { from: "The Crypt Keeper", msg: "Greetings" },
    { from: "Dracula", msg: "I vant to suck your blood" },
    { from: "Igor", msg: "Masthter!" },
  ],
  vampires: [
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

const Store = (props) => {

const reducerHook = React.useReducer(reducer, initialState)

  return (
    <CTX.Provider value={reducerHook}>
      {props.children}
    </CTX.Provider>
  )
}

export default Store