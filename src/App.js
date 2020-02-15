import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import data from './data';
import APIContext from './APIContext';
import EventList from './EventList';
import EventPage from './EventPage';
import Home from './Home';
import AddEvent from './AddEvent';
import LandingPage from './LandingPage';

/*
  - routing
  - '/events' - list (EventList)
  - '/events/:event_id/' - one full event (EventPage)
*/

class App extends Component {

  state = {
    users: [],
    events: [],
    landed: false,
  }


  componentDidMount() {
    //update state to have the imported seed data
    this.setState({
      users: data.users, 
      events: data.events,
      })
  }

  
  handleEnter = () => {
    this.setState({
      landed: true
    })
  }

  addEvent = (newEvent) => {
    fetch('localhost:8000/events',{
      method: 'POST',
      body: JSON.stringify(newEvent),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(res => {
      if(!res.ok){
        throw 'could not post new event'
      }
    })

    .then(res => {
      return
      console.log('posted')
    })
    .catch(error => {
      console.log ({error})
    })
  }
  

  render() {
  const value = {
    users: this.state.users,  
    events: this.state.events,
    addEvent: this.addEvent,
} 



  
    return (
    <APIContext.Provider value={value}>
      <header>
        <h1><Link to='/'>Drinking Buddies</Link></h1>
        <nav></nav>
      </header>

      <main className="App">

        <Route 
          exact 
          path='/'
          render={() => {
            return (
              this.state.landed 
                ? <Home />
                : <LandingPage handleEnter={this.handleEnter} /> 
            )
          }}
        />

        <Route 
          exact 
          path='/events/:event_id'
          component={EventPage}
        />

        <Route
          exact
          path='/add-event'
          component={AddEvent}
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

