import './index.css';
import React, { Component } from 'react';

export default class LoginMenu extends Component {
    render(){
        return (
            <div className="menu-login col-xs-12">
                <div className="atrributes-login col-xs-12 col-sm-6 col-md-4"></div>
                <div className="input-login col-xs-12 col-sm-6 col-md-8">
                    <div className="information-login col-xs-12"></div>
                    <div className="exit-login col-xs-12"></div>
                </div>
            </div>
        )
    }
}