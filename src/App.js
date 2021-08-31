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

          <Route exact path={"/TECHetc2K21/events/college/knowmore/1"}>
            <KnowMore id={0} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/2"}>
            <KnowMore id={1} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/3"}>
            <KnowMore id={2} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/4"}>
            <KnowMore id={3} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/5"}>
            <KnowMore id={4} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/6"}>
            <KnowMore id={5} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/7"}>
            <KnowMore id={6} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/8"}>
            <KnowMore id={7} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/9"}>
            <KnowMore id={8} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/10"}>
            <KnowMore id={9} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/11"}>
            <KnowMore id={10} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/12"}>
            <KnowMore id={11} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/college/knowmore/13"}>
            <KnowMore id={12} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/school/knowmore/1"}>
            <KnowMore id={13} />
          </Route>

          <Route exact path={"/TECHetc2K21/events/school/knowmore/2"}>
            <KnowMore id={14} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;