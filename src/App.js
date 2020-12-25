import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmobile from './components/Navmobile.jsx';
import FirstScreen from './components/First-screen.jsx';
import SecondScreen from './components/Second-screen.jsx';
import ThirdScreen from './components/Third-screen.jsx';
import FourthScreen from './components/Fourth-screen.jsx';
import FiveScreen from './components/Five-screen.jsx';
import SixthScreen from './components/Sixth-screen.jsx';
import SeventhScreen from './components/Seventh-screen.jsx';
import EightScreen from './components/mosaic-eight.jsx';
import NineScreen from './components/Nine-screen.jsx';
import TenScreen from './components/Ten-screen.jsx';
import ElevenScreen from './components/Eleven-screen.jsx';
import TwelveScreen from './components/Twelve-screen.jsx';
import Modal from './components/Modal.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props)=> {
  return (
    <div>
        <BrowserRouter>
          <Route path='/webexam-react/form' render={()=><Modal state={props.state} dispatch={props.store.dispatch.bind(props.store)} store={props.store} />} />
          <Navmobile />
          <FirstScreen />
          <SecondScreen />
          <ThirdScreen />
          <FourthScreen />
          <FiveScreen />
          <SixthScreen />
          <SeventhScreen />
          <EightScreen />
          <NineScreen />
          <TenScreen />
          <ElevenScreen />
          <TwelveScreen state={props.state} store={props.store} dispatch={props.store.dispatch.bind(props.store)} />
        </BrowserRouter>
    </div>
  );
}

export default App;