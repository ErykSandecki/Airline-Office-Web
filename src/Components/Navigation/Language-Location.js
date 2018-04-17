import React, { Component } from 'react';
import './index.css';
import Country from '../../Resources/Country.js'

export default class LanguageAndLocation extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            location: this.props.location,
            language: this.props.language,
            saveChange: false,
            vissible: this.props.vissible
        }
    }

    handleChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
    }

    hanleChangeLanguage(e){
        this.setState({
            language: e.target.value
        })
    }

    change() {
        this.setState({
            saveChange: !this.state.saveChange
        })
    }

    setLocationOrLanguage(location, language ,saveChange) {
        this.props.setLocationAndLanguage(location, language, saveChange)
        this.props.toggleButton();
    }

    render(){
        return(
            <div className={this.state.vissible ? "change-settings-language-or-location-vissible" : "change-settings-language-or-location"}> 
                <p className="language-or-location-title" >Flying with World Travel</p>
                <div className="form-group col-xs-12 col-md-6">
                    <select onChange={this.handleChangeLocation.bind(this)} value={this.state.location} className="form-country-and-language col-xs-12">
                        {Country.map(list => <option className="location" key={list.id}>{list.country}</option>)}
                    </select>
                </div>
                <div className="col-xs-12 col-md-6">
                <select onChange={this.hanleChangeLanguage.bind(this)} value={this.state.language} className="form-country-and-language col-xs-12">
                    <option>English</option>
                    <option>Polski</option>
                </select>
                </div>
                <div className="remember-settings col-xs-12">
                    <input checked={this.state.saveChange} onChange={this.change.bind(this)} type="checkbox" className="col-xs-2 language-or-location-checkbox"/>
                    <p className="language-or-location-checkbox-text">
                        {this.props.language === 'Polski' ? 'Zapamiętaj ustawienia' : 'Settings remember'}
                    </p>
                </div>
                <div className="col-xs-12">
                    <button onClick={() => this.setLocationOrLanguage(this.state.location, this.state.language, this.state.saveChange)} className="col-xs-12 language-or-location-button-submit">
                        {this.props.language === 'Polski' ? 'Kontynuuj' : 'Continue'}
                    </button>
                </div>
            </div>
        )
    }    
}
