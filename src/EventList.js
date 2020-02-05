import React from 'react';
import APIContext from './APIContext';
import { Link } from 'react-router-dom';

export default class EventList extends React.Component {

  static contextType = APIContext;

  render() {
    console.log(this.context.events)
    const eventsHTML = this.context.events.length > 0 ? this.context.events.map((event, idx)=>{
      console.log(event)

     

      
      return (
        <Link to={`/events/${event.id}`}>
          <div key={idx}> {/* these divs are actually links to react-router endpoints*/}
            <p>{event.location}</p>
            <p>{event.date.toString()}</p>  
            
          </div>
        </Link>
      );
    }) : '';

    return (
      <section className='events-page'>
        <h1>Events Page</h1>
        {eventsHTML}
      </section>
    )
  }

}
