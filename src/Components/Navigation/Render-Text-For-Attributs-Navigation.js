import './index.css';
import React, { Component } from 'react';
import {textOptionsNavigation} from '../../Resources/Text-Options-Navigation.js'
import GlyphiconArrowRightBlack from '../../Images/Glyphicon-Arrow-Right-Black.png'

export default class RenderTextForAttributsNavigation extends Component {

    render(props){
       return (
            <div>
                {this.props.language === 'Polski' ? 
                textOptionsNavigation[this.props.index].polish.text.map(list =>
                   <div key={list.text_id}>
                        <p className="title-select-navigation">{list.title}</p>
                        <div className="option-select-navigation">
                            {list.textOption.map(option =>
                               <a key={option}>
                                <img alt="arrow-right" src={GlyphiconArrowRightBlack}/>
                                <p>{option}</p>
                               </a>
                            )}
                        </div>
                   </div>
                )
                : 
                textOptionsNavigation[this.props.index].english.text.map(list =>
                   <div key={list.text_id}>
                        <p className="title-select-navigation">{list.title}</p>
                        <div className="option-select-navigation">
                            {list.textOption.map(option =>
                               <a key={option}>
                                <img alt="arrow-right" src={GlyphiconArrowRightBlack}/>
                                <p>{option}</p>
                               </a>
                            )}
                        </div>
                   </div>
                )
                }
            </div>
       ) 
    }
}