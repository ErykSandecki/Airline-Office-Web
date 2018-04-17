import React, { Component } from 'react';
import './index.css';
import {allTextToSearchPolish, allTextToSearchEnglish} from '../../Resources/Search-Key.js';
import ArrowSugestionSearch from '../../Images/Arrow-Suggestion-Search.png';
import GlyphiconSearch from '../../Images/Glyphicon-Search.png';

export default class SearchInput extends Component {
    
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            showSuggestionArea: false,
            textToSearchInput : this.props.language === 'Polski' ? allTextToSearchPolish : allTextToSearchEnglish,
            onBlurActive: false
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

    showSuggestionSearch(e) {
        this.setState({
            showSuggestionArea: true
        })
        const text = e.currentTarget.value;
        const textToSearchInput = this.getFilteredSuggestions(text)
        this.setState({
            textToSearchInput
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
            this.props.hideOnInput();
        }
    }

    render(){
        return (
            <div>
                <input ref={this.textInput} onInput={this.showSuggestionSearch.bind(this)} onBlur={this.hideOninput.bind(this)} className="input-search"/>
                <img className="set-icon-search-input-show" src={GlyphiconSearch} alt="glyphicon-search"/>
                <div>
                    <img className={this.state.showSuggestionArea ? "arrow-suggestion" : "arrow-suggestion-hide" } src={ArrowSugestionSearch} alt="suggestionn"/>
                    <div className={this.state.showSuggestionArea ? "sugestion-search" :"sugestion-search-hide"}> 
                        {this.state.textToSearchInput.length > 0 ?
                            this.state.textToSearchInput.map((text) => {
                                return (
                                    <div className="content-suggestion" key={text.id}>
                                        <a href={text.src}>{text.text}</a>
                                        <div className="underline-sugesstion"/>
                                    </div>
                                )
                            }):
                            <div className="content-suggestion">
                                <a>{this.props.language === 'Polski' ? 'Nie znaleziono' : 'Not found'}</a>
                                <div className="underline-sugesstion"/>
                            </div>
                        }
                        <div className="content-suggestion">
                            <a className="show-more">
                                <p>{this.props.language === 'Polski' ? 
                                    'Pokaż więcej' :
                                    'Show more'
                                    }
                                </p>
                            </a>
                            <div className="underline-sugesstion"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}