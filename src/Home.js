import React, { Component } from 'react';
import APIContext from './APIContext'
import EventList from './EventList';

export default class Home extends Component {
    render(){
        return <EventList />
    }
}