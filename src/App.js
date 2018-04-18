import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/index.js'
import PicturePresentation from './Images/Picture-Presenatation.png'

class App extends Component {
  location;
  language;
  constructor(props) {
    super(props);
    this.getLocalStorage();
    this.setBody = this.setBody.bind(this);
    this.setLocationAndLanguage = this.setLocationAndLanguage.bind(this);
    this.state = {
      vissible: false,
      location: this.location,
      language: this.language,
    }
  }

  getLocalStorage() {
    var objectToSaveStorage = localStorage.getItem('myObject');
    objectToSaveStorage = JSON.parse(objectToSaveStorage);
    
    if(objectToSaveStorage === null) {
      this.location = 'Polska';
      this.language = 'Polski';
    }
    else {
      this.location = objectToSaveStorage.location;
      this.language = objectToSaveStorage.language;
    }
  }

  setBody() {
    this.setState({
      vissible: !this.state.vissible
    })
  }

  hideAllElement(){
    this.setState({
      vissible: false
    })
  }

  setLocationAndLanguage(location, language, rememberSettings){
    this.setState({
      location: location,
      language : language,
      vissible: false
    })
    
    if(rememberSettings){
      this.saveToLocalStorage(location,language);
    }
  }

  saveToLocalStorage(location, language) {
    var objectToSaveStorage = {
      location: '',
      language: ''
    }
    objectToSaveStorage.location = location;
    objectToSaveStorage.language = language;
    localStorage.setItem('myObject', JSON.stringify(objectToSaveStorage));
  }

  render() {
    return (
      <div>
        <div 
          className={this.state.vissible ? "hide-body-active": "body-active"} 
          onClick={this.hideAllElement.bind(this)}>
        </div>
        <Navigation 
          location={this.state.location} 
          language={this.state.language} 
          setLocationAndLanguage={this.setLocationAndLanguage} 
          setBody={this.setBody}
          vissible = {this.state.vissible}
        />
        <div className="presentation">
          <img width="1400" className="img-responsive" src={PicturePresentation} alt="presentation"/>
        </div>
      </div>
    );
  }
}

export default App;
