import { getWarningMessage, getErrorMessage } from './notifications';
import getRefs from './refs';
import allCountries from '../templates/allCountries.hbs';
import oneCountry from '../templates/oneCountry.hbs'

const refs = getRefs();

function renderCountryList(countries) {
    if(countries.length >= 2 && countries.length<=10){
        renderAllCountries(countries);
        return;
    }
    if(countries.length === 1 ){
        clearContainer();
        renderOneCountry (countries);
        return;
    }
    if(countries.length >10 ){
   
        getWarningMessage();
        return;
    }  
    if(!countries) {
        clearContainer();
        getErrorMessage();
        return;
    }
}

function renderAllCountries (countries){
    const markup = allCountries(countries);
    
    refs.container.innerHTML = markup;
}

function renderOneCountry (countries){
    const markup = oneCountry(countries[0]);
   
    refs.container.innerHTML = markup;
}

function clearContainer (){
    refs.container.innerHTML=""
}

export {
    renderCountryList, clearContainer
}
