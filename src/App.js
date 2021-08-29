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
import { Gallery } from './pages/Gallery';

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

          <Route exact path="/gallery">
            <Gallery/>
          </Route>

          <Route exact path={"/events/college/knowmore/1"}>
            <KnowMore id={0} />
          </Route>

          <Route exact path={"/events/college/knowmore/2"}>
            <KnowMore id={1} />
          </Route>

          <Route exact path={"/events/college/knowmore/3"}>
            <KnowMore id={2} />
          </Route>

          <Route exact path={"/events/college/knowmore/4"}>
            <KnowMore id={3} />
          </Route>

          <Route exact path={"/events/college/knowmore/5"}>
            <KnowMore id={4} />
          </Route>

          <Route exact path={"/events/college/knowmore/6"}>
            <KnowMore id={5} />
          </Route>

          <Route exact path={"/events/college/knowmore/7"}>
            <KnowMore id={6} />
          </Route>

          <Route exact path={"/events/college/knowmore/8"}>
            <KnowMore id={7} />
          </Route>

          <Route exact path={"/events/college/knowmore/9"}>
            <KnowMore id={8} />
          </Route>

          <Route exact path={"/events/college/knowmore/10"}>
            <KnowMore id={9} />
          </Route>

          <Route exact path={"/events/college/knowmore/11"}>
            <KnowMore id={10} />
          </Route>

          <Route exact path={"/events/college/knowmore/12"}>
            <KnowMore id={11} />
          </Route>

          <Route exact path={"/events/college/knowmore/13"}>
            <KnowMore id={13} />
          </Route>

          <Route exact path={"/events/school/knowmore/1"}>
            <KnowMore id={14} />
          </Route>

          <Route exact path={"/events/school/knowmore/2"}>
            <KnowMore id={15} />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
