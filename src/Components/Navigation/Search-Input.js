import React, { Component } from 'react';
import './index.css';
import {allTextToSearchPolish, allTextToSearchEnglish} from '../../Resources/Search-Key.js';
import SuggestionArea from './Suggestion-Area.js'
import GlyphiconSearch from '../../Images/Glyphicon-Search.png';

export default class SearchInput extends Component {
    
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            showSuggestionArea: false,
            onBlurActive: false,
            textSuggestion: this.props.language === 'Polski' ? allTextToSearchPolish : allTextToSearchEnglish,
        }
    }

    componentDidMount() {
        this.setFocus();
        this.setState({
            onBlurActive : true
        })
    }

    setFocus() {
        this.textInput.current.focus();
    }

    showSuggestionSearch(e){
        const text = e.currentTarget.value;
        const textToSearchInput = this.getFilteredSuggestions(text)
        this.setState({
            showSuggestionArea: true,
            textSuggestion: textToSearchInput
        })
    }

    getFilteredSuggestions(text) {
        if(this.props.language === 'Polski') {
            return allTextToSearchPolish.filter(suggestion => 
                suggestion.text.toLowerCase().includes(text.toLowerCase()))
        }
        else {
            return allTextToSearchEnglish.filter(suggestion => 
                suggestion.text.toLowerCase().includes(text.toLowerCase()))
        }    
      }

    hideOninput(){
        if(this.state.onBlurActive) {
            this.setState({
                showSuggestionArea: false
            })
            if(this.props.blurForDeskopt){
                this.props.hideOnInput();
            }
            
        }
    }

    render(){
        return (
            <div>
                <input ref={this.textInput} onInput={this.showSuggestionSearch.bind(this)} onBlur={this.hideOninput.bind(this)} className="input-search"/>
                <img className="set-icon-search-input-show" src={GlyphiconSearch} alt="glyphicon-search"/>
                {this.state.showSuggestionArea ? <SuggestionArea textToSearchInput={this.state.textSuggestion} textSuggestion={this.state.SuggestionArea} showSuggestionArea={this.state.showSuggestionArea} language={this.props.language} /> : null}
            </div>
        )
    }
}