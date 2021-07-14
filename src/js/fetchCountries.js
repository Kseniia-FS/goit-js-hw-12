const debounce = require('lodash.debounce');
import { renderCountryList, clearContainer } from './renderMarkup';
import getRefs from './refs';
import { getErrorMessage } from './notifications';

const refs = getRefs();
const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

refs.searchForm.addEventListener('input', debounce(onSearch, 300));

function onSearch(e) {
  e.preventDefault();
  const form = e.target;
  const searchQuery = form.value;
  if(searchQuery.length === 0){
    clearContainer();
    return
  }
  fetchCountryByName(searchQuery)
  .then(renderCountryList)
  .catch(console.log);
}



function fetchCountryByName(name) {
  return fetch(`${BASE_URL}${name}?fields=name;capital;flag;languages;population`).then(r => {
    if(!r.ok){
        clearContainer();
        throw new Error(getErrorMessage())
    }
    return r.json();
  });
}



