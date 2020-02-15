import React from 'react'
import APIContext from './APIContext'

export default props => {
    return(
        <section className='landing-page'>
            <h3>Drinking buddies is a meetup app for breweries</h3>
            <h3>Create and join drinking events at a brewery near you</h3>
            <button onClick={props.handleEnter}>Enter</button>
        </section>
    )
}


