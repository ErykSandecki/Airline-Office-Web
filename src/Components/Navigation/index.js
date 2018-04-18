import './index.css';
import React, { Component } from 'react';
import GlyphiconArrowRight from '../../Images/Glyphicon-Arrow-Right.png';
import GlyphiconDropDownShow from '../../Images/Glyphicon-Drop-Down-Show.png'
import GlyphiconDropDown from '../../Images/Glyphicon-Drop-Down.png'
import GlyphiconHead from '../../Images/Glyphicon-Head.png';
import GlyphiconSearch from '../../Images/Glyphicon-Search.png';
import IconTravel from '../../Images/Icon-Logo.png';
import LanguageAndLocation from './Language-Location.js';
export default class Navigation extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            vissible: false
        }
    }

    componentWillReceiveProps() {
        if(this.props.vissible){
            this.setState({
                vissible: false
            })
        }
    }

    toggleButton() {
        this.setState({
            vissible: !this.state.vissible
        })
        this.props.setBody();
    }   

    render() {
        return(    
        <nav className="nav">
            <div className="logo">
                <img width="50" height="50" src={IconTravel} alt="icon"/>
            </div>
            <div>
                <p className="text-logo">World Travel</p>
            </div>
            <div className="attributes-navigation">
                <div className={this.props.vissible && this.state.vissible ? "button-mobile-tablet change" :"button-mobile-tablet"} onClick={this.toggleButton.bind(this)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className={this.props.vissible && this.state.vissible ? "nav-options-vissible" : "nav-options"}>
                    <div className={this.props.vissible && this.state.vissible ? "section-location-language-vissible" : "section-location-language"}>
                        <p className="text-hide-location-and-language" 
                            onClick={this.toggleButton.bind(this)}>{window.innerWidth > 1024 ?
                                this.props.location +
                                " | " +
                                (this.props.language === 'Polski' ?
                                    "Polski  "
                                    : "English  "
                                )                                     
                                : null    
                            }
                            <img src={this.props.vissible ? GlyphiconDropDownShow : GlyphiconDropDown}/> 
                        </p>
                        <LanguageAndLocation 
                            vissible={this.state.vissible}
                            vissibleBody={this.props.vissible} 
                            setLocationAndLanguage={this.props.setLocationAndLanguage}  
                            toggleButton={this.toggleButton.bind(this)} 
                            language={this.props.language} 
                            location={this.props.location}
                        />    
                    </div>
                </div>
            </div>
        </nav>
        )
    }
}

