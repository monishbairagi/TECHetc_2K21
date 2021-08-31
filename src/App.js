import './App.css';
import React from 'react'
import { NavBar } from './components/NavBar';
import { Main } from './pages/Main';
import { Contact } from './pages/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CollegeEvents } from './pages/Events/CollegeEvents';
import { SchoolEvents } from './pages/Events/SchoolEvents';
import { EventsMain } from './pages/EventsMain';
import { Schedule } from './pages/Schedule';
import { Background } from './components/Background';
import { KnowMore } from './components/KnowMore';
import { Gallery } from './pages/Gallery';
import { Rules } from './pages/Rules';

function App() {
  let appStyle = {
    transition: '.5s',
  }

  return (
    <div style={appStyle}>
      <Router>
        <Background />
        <NavBar />
        <Switch>

          <Route exact path="/TECHetc2K21">
            <Main />
          </Route>

          <Route exact path="/TECHetc2K21/contact">
            <Contact />
          </Route>

          <Route exact path="/TECHetc2K21/events">
            <EventsMain />
          </Route>

          <Route exact path="/TECHetc2K21/events/college">
            <CollegeEvents />
          </Route>

          <Route exact path="/TECHetc2K21/events/school">
            <SchoolEvents />
          </Route>

          <Route exact path="/TECHetc2K21/schedule">
            <Schedule />
          </Route>

          <Route exact path="/TECHetc2K21/rules">
            <Rules/>
          </Route>

          <Route exact path="/TECHetc2K21/gallery">
            <Gallery/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;