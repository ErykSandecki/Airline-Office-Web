import React, { Component } from 'react';
import './index.css';
import ArrowSugestionSearch from '../../Images/Arrow-Suggestion-Search.png';             

export default class SuggestionArea extends Component {
   
    render(){
        return(
        <div>
            <img className={this.props.showSuggestionArea ? "arrow-suggestion" : "arrow-suggestion-hide" } src={ArrowSugestionSearch} alt="suggestionn"/>
            <div className={this.props.showSuggestionArea ? "sugestion-search" :"sugestion-search-hide"}> 
                {this.props.textToSearchInput.length > 0 ?
                    this.props.textToSearchInput.map((text) => {
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
    )
    }   
}