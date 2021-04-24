import './css/App.css';
import Navb from './component/navb';
import Main from './component/Main';
import Foot from './component/Footer'
import Skill from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contactus';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './component/About';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navb/>
        <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/project">
            <Project/>
          </Route>
          <Route path="/">
            <Main/>
            <Skill/>
          </Route>
        </Switch>
        <Foot/>
      </Router>
    </div>
  );
}

export default App;
