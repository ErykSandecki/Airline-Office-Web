import './index.css';
import React, { Component } from 'react';
import RenderTextForAttributsNavigation from './Render-Text-For-Attributs-Navigation.js'

export default class Discover extends Component {
    constructor(props){
        super(props);
        this.state = {
            visibleDiscover: false
     }
    }

    showDiscover() {
        timer = setTimeout(() => {
            this.setState({
                visibleDiscover: true
            })
        }, 500);
    }

    hideDiscover() {
        clearTimeout(timer);
        this.setState({
            visibleDiscover: false
        })
    }

    render(){
        return(
            <div onMouseLeave={
                this.hideDiscover.bind(this)} 
                onMouseEnter={this.showDiscover.bind(this)} 
                className={this.state.visibleDiscover ? 
                            "discover"
                            : "hide-dicover"
                        }>
                {this.props.language === 'Polski' ?
                    'Odkrywanie' 
                    : "Discover"
                }
                <div className={this.props.language === 'Polski' ?
                    this.state.visibleDiscover ? "discover-menu" : "hide-discover-menu"
                    : this.state.visibleDiscover ? "discover-menu-en" : "hide-discover-menu"
                    }>
                     <RenderTextForAttributsNavigation index={3} language={this.props.language} />    
                </div>
            </div>       
        )
    }
}

var timer;
