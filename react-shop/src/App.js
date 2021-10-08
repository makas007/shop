import {Route, Switch, BrowserRouter as Router,} from "react-router-dom";
import './App.css';
import Main from './components/Main';
import Cart from './components/Cart';
import Header from './components/Header';
import Test from './components/Test'

function App() {
  return (
    <Router className='App'>
      <Test/>
      <Header />
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/cart' component={Cart}/>
      </Switch>
    </Router>
  );
}

export default App;
