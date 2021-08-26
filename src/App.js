import './App.css';
import React, { useState } from 'react'
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
import Credits from './pages/Credits';

function App() {
  let appStyle = {
    transition: '.5s',
  }

  let js = {
    id: 0,
    event: ""
  };

  let id = 1;
  // const [eventData, setEventData] = useState(js)
  // let getJson = (e) => {
  //   // console.log(e.event);
  //   setEventData({
  //     id: e.id,
  //     event: e.event
  //   });
  //   console.log(eventData);
  // }

  return (
    <div style={appStyle}>
      <Router>
        <Background />
        <NavBar />
        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/events">
            <EventsMain />
          </Route>

          <Route exact path="/events/college">
            <CollegeEvents />
          </Route>

          <Route exact path="/events/school">
            <SchoolEvents />
          </Route>

          <Route exact path="/schedule">
            <Schedule />
          </Route>

          <Route exact path="/credits">
            <Credits />
          </Route>

          <Route exact path={"/events/knowmore/1"}>
            <KnowMore id={0} />
          </Route>

          <Route exact path={"/events/knowmore/2"}>
            <KnowMore id={1} />
          </Route>

          <Route exact path={"/events/knowmore/3"}>
            <KnowMore id={2} />
          </Route>

          <Route exact path={"/events/knowmore/4"}>
            <KnowMore id={3} />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
