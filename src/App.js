import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contactus"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import C17 from "./pages/C17"
import DragonXL from "./pages/DragonXL"
import SpaceX from "./pages/SpaceX"
import Grob from "./pages/Grob"
import Reven from "./pages/Reven"
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/aboutus' component={About} />
        <Route path='/explore' component={Explore} />
        <Route path='/dragonXL' component={DragonXL} />
        <Route path='/spacex' component={SpaceX} />
        <Route path='/c17' component={C17} />
        <Route path='/grob' component={Grob} />
        <Route path='/reven' component={Reven} />
        <Route path='/contactus' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
