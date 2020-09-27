import React, { createContext, useReducer } from 'react';
import '../styles/globals.css';

const initialState = {
  channel: "initial"
}

const SiteProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <SiteContext.Provider value={{state, dispatch}}>
    {children}
  </SiteContext.Provider>
}

function MyApp({ Component, pageProps }) {
  return (
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
  )
}

function reducer(state, action) {
  switch (action.type) {
    case 'CHANNEL_CHANGE':{
      return {
        ...state,
        channel: action.payload
      }
    }
  }
}

export const SiteContext = createContext();

export default MyApp;