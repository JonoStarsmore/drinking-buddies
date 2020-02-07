import React, { Component } from 'react';
import APIContext from './APIContext';


export default class AddEvent extends Component {

    state = {
        title:'',
        location: '',
        description:'',
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        // get all input data from state 

        // submit that information where it needs to go

    }

    onInputChange = e => {
        // determine which input was changed so we can reuse this function for all inputs
        const inputType = e.target.name;

        // update the state for that input with the new value
        this.setState({
            [inputType]: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmitForm}>
            <fieldset>
                <legend>Add Event</legend>
                <label htmlFor='title'>
                    title:
                    <input onChange={this.onInputChange} className='input-title' name='title' type="text" />
                </label>
                <label htmlFor='location'>
                        location:
                    <input className='input-location' name='location'type="text" />
                </label>
                <label htmlFor="description">
                        description:
                    <input className='input-description' name='description' type="text" />
                </label>
                <label htmlFor="date">
                        date:
                    <input className='input-date' name='date' type="date" />
                </label>
            </fieldset>
            </form>
        )
    }
} 


/*1. add event component -> post to data. API.
    - Add event form
    - create post request that adds submission to data
    Event list: add link to event form to event list render
    create routing in app

    */