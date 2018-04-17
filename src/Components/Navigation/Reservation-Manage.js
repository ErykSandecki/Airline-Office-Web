import './index.css';
import React, { Component } from 'react';
import RenderTextForAttributsNavigation from './Render-Text-For-Attributs-Navigation.js'

export default class ReservationManage extends Component {
    constructor(props){
        super(props);
        this.state = {
            visibleReservationManage: false
        }
    }

    showReservationManage() {
       timer = setTimeout(() => {
            this.setState({
                visibleReservationManage: true
            })
        }, 500);
    }

    hideReservationManage() {
        clearTimeout(timer);
        this.setState({
            visibleReservationManage: false
        })
    }
    
    render(){
        return(
            <div onMouseLeave={
                this.hideReservationManage.bind(this)} 
                onMouseEnter={this.showReservationManage.bind(this)} 
                className={this.state.visibleReservationManage ? 
                            "reservation-manage"
                            : "hide-reservation-manage"
                          }>
                {this.props.language === 'Polski' ?
                    'Rezerwacja & Zarządzanie' 
                    : 'Book & Manage'
                 }
                <div className={this.props.language === "Polski" ?
                 this.state.visibleReservationManage ? "reservation-manage-menu" : "hide-reservation-manage-menu"
                 :this.state.visibleReservationManage ? "reservation-manage-menu-en"  : "hide-reservation-manage-menu"
                    }>
                    <RenderTextForAttributsNavigation index={0} language={this.props.language} />
                </div>
            </div>       
        )
    }
}

var timer;