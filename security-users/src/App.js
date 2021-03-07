import React from 'react'
import './app.css';
import UserList from './components/UserList.js';
import TableComponent from './components/TableComponent.js';
import FormComponent from './components/FormComponent.js'
import UserSummary from './components/UserSummary';
import Laptops from './components/Laptops.js';
import Admin from './components/Admin';
import {Provider} from 'react-redux';
import store from './utils/Store.js';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'


function App() {  

  return(
    <Provider store={store}>
      <Router>
      <div className="app">
      <Switch>
        <Route path="/" exact component={TableComponent}/>
        <Route path="/admin/:id" exact component={Admin}/>
      </Switch>
      </div>
      </Router>
    </Provider>

    )

}

export default App;
