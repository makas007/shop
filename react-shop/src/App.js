import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Cart from "./components/Cart"

function App() {
  return (
    <Router className='App'>
    <Header/>
    <Switch>
        <Route exact path='/men' component={Categories}/>
        <Route exact path='/' component={Main}/>
        <Route exact path='/cart' component={Cart}/>
    </Switch>
      <div className="footer-wrap">
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
