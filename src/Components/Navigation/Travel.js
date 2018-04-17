import './index.css';
import React, { Component } from 'react';
import RenderTextForAttributsNavigation from './Render-Text-For-Attributs-Navigation.js'

export default class Travel extends Component {
    constructor(props){
        super(props);
        this.state = {
            visibleTravel: false
     }
    }

    showTravel() {
        timer = setTimeout(() => {
            this.setState({
                visibleTravel: true
            })
        }, 500);
    }

    hideTravel() {
        clearTimeout(timer);
        this.setState({
            visibleTravel: false
        })
    }

    render(){
        return(
            <div onMouseLeave={
                this.hideTravel.bind(this)} 
                onMouseEnter={this.showTravel.bind(this)} 
                className={this.state.visibleTravel ? 
                            "travel"
                            : "hide-travel"
                        }>
                {this.props.language === 'Polski' ?
                    'Podróż' 
                    : 'Travel'
                }
                <div className={this.props.language === 'Polski' ?
                    this.state.visibleTravel ? "travel-menu" : "hide-travel-menu"
                    :this.state.visibleTravel ? "travel-menu-en" : "hide-travel-menu"
                    }>
                    <RenderTextForAttributsNavigation index={2} language={this.props.language} />
                </div>
            </div>       
        )
    }
}

var timer;
