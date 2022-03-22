import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcakes from "./pages/cupcake";
import AboutUs from "./pages/aboutUs";
import "../styles/cupcake.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

const App = () => {
  return(
    <Router>
      <Header />
      <Switch>
          <Route path="/cupcakes"> <Cupcakes title peticion="cupcakes" /> </Route>
          <Route path="/nosotros"> <AboutUs /> </Route>
          <Route path="/"> <Home /> </Route>
      </Switch>
    </Router>
  )
}

export default App;

