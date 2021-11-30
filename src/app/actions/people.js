import axios from 'axios';

export const SET_PEOPLE = 'SET_PEOPLE';
export const ADD_TO_CONTACTS = 'ADD_TO_CONTACTS';
export const REMOVE_FROM_CONTACTS = 'REMOVE_FROM_CONTACTS';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

export const fetchPeople = () => (
    dispatch => {
        axios
            .get('./data/data.json')
            .then( response => {
                dispatch({
                    type: SET_PEOPLE, 
                    people: response.data.people
                });
            })
            .catch( error => {
                throw error
            })
    }
)

export const addToContacts = item => (
    {
        type: ADD_TO_CONTACTS, 
        person: item 
    }
);

export const removeFromContacts = item => (
    {
        type: REMOVE_FROM_CONTACTS, 
        person: item 
    }
);

export const addToFavourites = item => (
    {
        type: ADD_TO_FAVOURITES, 
        person: item 
    }
);

export const removeFromFavourites = item => (
    {
        type: REMOVE_FROM_FAVOURITES, 
        person: item 
    }
);