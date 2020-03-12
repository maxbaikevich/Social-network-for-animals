import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/scenes/Navbar/Navbar";

import Routes from "./components/Routes/Routes";

import { Provider } from "react-redux";
import { store } from "../src/components/scenes/Bot/Bot/chat";
import { CurrentUserProvider } from "./contexts/currentUser";
import Footer from "./components/scenes/Footer/Footer.js";
// import CurrentUserChecker from './components/currentUserChecker';
import Chat from './components/chat/chat'
import Bot from '../src/components/scenes/Bot/Bot/bot'
// import ImageUploader from '../src/firebase/imageuploader'

const App = () => {
  return (
    <CurrentUserProvider>
      <Provider store={store}>
        <Router>
          <Navbar />
          
         
          
          <Routes />
           {/* <Bot /> */}
        </Router>
      </Provider>
      
    </CurrentUserProvider>
  );
};

export default App;
