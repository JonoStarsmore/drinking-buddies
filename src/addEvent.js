import React, { Component } from 'react';
import APIContext from './APIContext';


export default class AddEvent extends Component {

    static contextType = APIContext;

    state = {
        title:'',
        location: '',
        description:'',
        date:'',
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const newEvent = {
            title: this.state.title,
            location: this.state.location,
            description: this.state.description,
            date: this.state.date
        } 

        this.context.addEvent(newEvent)
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
                    <input onChange={this.onInputChange} value={this.state.title} className='input-title' name='title' type="text" />
                </label>
                <label htmlFor='location'>
                        location:
                    <input onChange={this.onInputChange} value={this.state.location} className='input-location' name='location'type="text" />
                </label>
                <label htmlFor="description">
                        description:
                    <input onChange={this.onInputChange} value={this.state.description} className='input-description' name='description' type="text" />
                </label>
                <label htmlFor="date">
                        date:
                    <input onChange={this.onInputChange} value={this.state.date} className='input-date' name='date' type="date" />
                </label>
                <input type='submit' value='Submit' className='event-submit'/>
            </fieldset>
            </form>
        )
    }
} 


