import React from 'react';
import logo from '../assets/images/logo.svg';

export class TopBar extends React.Component{

    render(){
        return(
            <img src={logo} className="App-logo" alt="logo" />
        );
    }
}