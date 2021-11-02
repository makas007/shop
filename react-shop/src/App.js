import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
  return (
    <Router className='App'>
     <Header/>
    <Switch>
        <Route exact path='/qwe' component={Categories}/>
        <Route path='/:id' component={Categories}/>
        <Route path='/' component={Main}/>
    </Switch>
      <div className="footer-wrap">
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
