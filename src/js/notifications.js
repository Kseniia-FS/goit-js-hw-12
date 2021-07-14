import Notiflix from 'notiflix';

function getWarningMessage (){
    Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
}

function getErrorMessage (){
    Notiflix.Notify.failure('Oops, there is no country withthat name');
}

export {
    getWarningMessage, getErrorMessage
}
