import './index.css';
import React, { Component } from 'react';
import GlyphiconArrowRight from '../../Images/Glyphicon-Arrow-Right.png';
import GlyphiconArrowRightBlack from '../../Images/Glyphicon-Arrow-Right-Black.png';
import GlyphiconDropDownShow from '../../Images/Glyphicon-Drop-Down-Show.png';
import GlyphiconDropDown from '../../Images/Glyphicon-Drop-Down.png';
import GlyphiconHead from '../../Images/Glyphicon-Head.png';
import GlyphiconSearch from '../../Images/Glyphicon-Search.png';
import IconTravel from '../../Images/Icon-Logo.png';
import LanguageAndLocation from './Language-Location.js';
import SearchInput from './Search-Input.js';
export default class Navigation extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            vissible: false,
            vissibleInputSearch : false,
        }
        this.hideOnInput = this.hideOnInput.bind(this);
    }

    componentWillReceiveProps() {
        if(this.props.vissible){
            this.setState({
                vissible: false,
                vissibleInputSearch: false
            })
        }
    }

    toggleButton() {
        this.setState({
            vissible: !this.state.vissible
        })
        this.props.setBody();
    }
    
    showOnInput(){
        this.setState({
            vissibleInputSearch : true
        })
    }

    showOnInputMobileTablet(){
        this.setState({
            vissibleInputSearch : true
        })
        this.props.setBody();
    }

    hideOnInput(){
        setTimeout(()=>{
            this.setState({
                vissibleInputSearch : false
            }) 
        },400)
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
                    <div className="col-xs-12 col-sm-6">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <p className={this.props.vissible && this.state.vissible ? "button-text-change col-sm-6" : "button-text col-sm-6"}>Menu</p>
                </div>
                <div>
                    <div onClick={this.showOnInputMobileTablet.bind(this)} className={this.props.vissible && this.state.vissibleInputSearch ? "glyphicon glyphicon-search glyphicon-search-vissible" :"glyphicon glyphicon-search"}></div>
                    {this.props.vissible && this.state.vissibleInputSearch ?
                        <div className="search-mobile-tablet">
                            <SearchInput language={this.props.language} hideOnInput={this.hideOnInput}/>
                        </div>
                        : null
                    }
                </div>
                <div className={window.innerWidth > 1024 ? "nav-options" : this.props.vissible && this.state.vissible ? "nav-options-vissible" : "nav-options"}>
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
                            <img src={this.props.vissible ? GlyphiconDropDownShow : GlyphiconDropDown} alt="glyphicon-arrow-right"/> 
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
                    <div className="section-help-contact">
                            <img alt="glyphicon-arrow-right" src={window.innerWidth > 1024 ? GlyphiconArrowRight : GlyphiconArrowRightBlack}/>
                            {window.innerWidth > 1024 ?
                                <a href="../../../public/Help-Contact.html">{this.props.language === 'Polski' ?
                                    " Pomoc i Kontakt"
                                    : " Help & Contact"
                                }</a>                                     
                                :<div>
                                    <a href="../../../public/Help-Contact.html">
                                        {(this.props.language === 'Polski' ?
                                        " Pomoc i Kontakt"
                                        : " Help & Contact"
                                        )}
                                    </a>
                                    <p/>
                                 </div>    
                            }
                    </div>
                    <div className="section-miles-more">
                            <img alt="glyphicon-arrow-right" src={window.innerWidth > 1024 ? GlyphiconArrowRight : GlyphiconArrowRightBlack}/>
                            {window.innerWidth > 1024 ?
                                <a target="_blank" rel="noopener noreferrer" href="https://www.miles-and-more.com/online/portal/mam/pl/homepage?l=pl&cid=1000340">
                                    Miles & More
                                </a>                                     
                                :<div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.miles-and-more.com/online/portal/mam/pl/homepage?l=pl&cid=1000340">
                                        Miles & More
                                    </a>
                                 </div>    
                            }
                    </div>
                    <div className="search">
                        {window.innerWidth > 1024 ?
                        <div>
                        {this.state.vissibleInputSearch ?  
                            <SearchInput language={this.props.language} hideOnInput={this.hideOnInput}/> 
                        :<p onClick={this.showOnInput.bind(this)} className="text-search">{this.props.language === "Polski" ? "Szukaj " : "Search "}<img alt="glyphicon-search" src={GlyphiconSearch}/></p>}   
                        </div>
                        :null
                        }
                       
                    </div>
                </div>
            </div>
        </nav>
        )
    }
}

