import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import data from './data';
import APIContext from './APIContext';
import EventList from './EventList';
import EventPage from './EventPage';
import Home from './Home';

/*
  - routing
  - '/events' - list (EventList)
  - '/events/:event_id/' - one full event (EventPage)
*/

class App extends Component {

  state = {
    users: [],
    events: [],
  }


  componentDidMount() {
    //update state to have the imported seed data
    this.setState({
      users: data.users, 
      events: data.events,
      })
  }

  
  
  

  render() {
  const value = {
    users: this.state.users,  
    events: this.state.events,
} 



  
    return (
    <APIContext.Provider value={value}>
      <header>
        <h1><Link to='/events'>Drinking Buddies</Link></h1>
        <nav></nav>
      </header>

      <main className="App">

        <Route 
          exact 
          path='/'
          component={Home}
        />

        <Route 
          exact 
          path='/events/:event_id'
          component={EventPage}
        />


      </main>


    </APIContext.Provider>
    );
  }
}



  //jsx for landing page
  //3. landing page -> main page
   //     - link to main event list
  //   - event description
      //link to event list-route

export default App;

