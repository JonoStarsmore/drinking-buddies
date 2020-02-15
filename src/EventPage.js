import React from 'react'
import APIContext from './APIContext';

export default class EventPage extends React.Component {

static contextType = APIContext;


state = {
  editing: false
}

//button will change state to true. and when true render edit event form. 
//when false render event
//move event jsx to its own component. which can be a function returning jsx



  render(){

      const eventId = this.props.match.params.event_id;
      const event = this.context.events.find(event => event.id === parseInt(eventId))

       const attending = event.attendees.length > 0 ? event.attendees.map((attendee)=>{
        console.log(attendee)
        const user = this.context.users.find(user => user.id === attendee)
        return <div>
          <p>{user.userName}</p>
        </div>
      }) : ''
    return (
        <div>
        <h1>{event.title}</h1>
        <p>{event.location}</p>
        <p>{event.date.toString()}</p> 
        <p>{event.description}</p>

        {attending}
        </div>
    
    
    )
        
  }


}

/*
1. call information to get unique Id --> //this.props.match.params.event_id --for accessing individual page ids
    
2. create JSX to be present on page
    - call info from context for each key in object from context
3. render created constant

4. delete event functionality -> delete request to API
    -find unique ID and remove from data

 
*/