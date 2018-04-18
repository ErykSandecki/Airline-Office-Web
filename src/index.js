import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var checkForDeskopt = true;
var checkForMobileTablet = true;

function resizeListener(){
     
    if(window.innerWidth > 1023 && checkForDeskopt) { 
        checkForDeskopt = false;
        checkForMobileTablet = true;
        update();
    }

    else if(window.innerWidth < 1024 && checkForMobileTablet){
        checkForMobileTablet = false;
        checkForDeskopt = true;
        update();
    }
} 

function update(){
    ReactDOM.render(<App />, document.getElementById('root'));
}

resizeListener();


window.addEventListener('resize', resizeListener)




registerServiceWorker();

