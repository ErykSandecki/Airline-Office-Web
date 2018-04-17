import './index.css';
import React, { Component } from 'react';
import RenderTextForAttributsNavigation from './Render-Text-For-Attributs-Navigation.js'

export default class Prepare extends Component {
    constructor(props){
        super(props);
        this.state = {
            visiblePrepare: false
        }
    }

    showPrepare() {
    timer = setTimeout(() => {
            this.setState({
                visiblePrepare: true
            })
        }, 500);
    }

    hidePrepare() {
        clearTimeout(timer);
        this.setState({
            visiblePrepare: false
        })
    }

    render(){
        return(
            <div onMouseLeave={
                this.hidePrepare.bind(this)} 
                onMouseEnter={this.showPrepare.bind(this)} 
                className={this.state.visiblePrepare ? 
                        "prepare"
                        : "hide-prepare"
                      }>
                {this.props.language === 'Polski' ?
                    'Przygotowanie' 
                    : 'Prepare'
                }
                <div className={this.props.language === 'Polski'?
                    this.state.visiblePrepare ? "prepare-menu" : "hide-prepare-menu"
                    :this.state.visiblePrepare ? "prepare-menu-en" : "hide-prepare-menu"
                    }>
                <RenderTextForAttributsNavigation index={1} language={this.props.language} />
                </div>
            </div>       
    )
}
}

var timer;
