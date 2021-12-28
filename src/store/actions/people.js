import axios from 'axios';

export const SET_PEOPLE = 'SET_PEOPLE';
export const ADD_TO_PEOPLE = 'ADD_TO_PEOPLE';
export const ADD_TO_CONTACTS = 'ADD_TO_CONTACTS';
export const REMOVE_FROM_CONTACTS = 'REMOVE_FROM_CONTACTS';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const REMOVE_FROM_PEOPLE = 'REMOVE_FROM_PEOPLE';
export const FILTER_PEOPLE = 'FILTER_PEOPLE';
export const SEARCH_PEOPLE = 'SEARCH_PEOPLE';

export const fetchPeople = () => (
    dispatch => {
        axios
            .get('https://people-e69a5-default-rtdb.firebaseio.com/people.json')
            .then( response => {
                const loadedPeople = [];
                const keys = Object.keys(response.data);
                const values = Object.values(response.data);

                for (let i = 0; i <= keys.length; i += 1) {
                    if (Object.prototype.hasOwnProperty.call(values, i)) {
                        loadedPeople.push({
                            id: i,
                            name: values[i].name,
                            city: values[i].city,
                            avatar: values[i].avatar,
                            social_networks: {
                                facebook: values[i].social_networks.facebook,
                                twitter: values[i].social_networks.twitter,
                                instagram: values[i].social_networks.instagram,
                                linkedin: values[i].social_networks.linkedin,
                            },
                            company: values[i].company,
                            position: values[i].position,
                            isFavourite: values[i].isFavourite,
                            isContact: values[i].isContact,
                        });
                    }
                }

                dispatch({
                    type: SET_PEOPLE, 
                    people: loadedPeople
                });
            })
            .catch( error => {
                throw error
            })
    }
)

export const addToPeople = item => (
    dispatch => {
        axios
            .post("https://people-e69a5-default-rtdb.firebaseio.com/people/.json", item)
            .then( response => {
                const addedPerson = { ...item, id: response.data.name }
                dispatch({
                    type: ADD_TO_PEOPLE, 
                    person: addedPerson
                });
            })
            .catch( error => {
                throw error
            })
    }
);

export const removeFromPeople = item => (
    dispatch => {
        axios
            .delete(`https://people-e69a5-default-rtdb.firebaseio.com/people/${item.id}.json`)
            .then( response => {
                dispatch({
                    type: REMOVE_FROM_PEOPLE, 
                    person: item 
                });
            })
            .catch( error => {
                throw error
            })
    }
);

export const addToContacts = item => (
    dispatch => {
        axios
            .patch(`https://people-e69a5-default-rtdb.firebaseio.com/people/${item.id}.json`, {
                isContact: true
            })
            .then( response => {
                dispatch({
                    type: ADD_TO_CONTACTS, 
                    person: item
                });
            })
            .catch( error => {
                throw error
            })
    }
);

export const removeFromContacts = item => (
    dispatch => {
        axios
            .patch(`https://people-e69a5-default-rtdb.firebaseio.com/people/${item.id}.json`, {
                isContact: false
            })
            .then( response => {
                dispatch({
                    type: REMOVE_FROM_CONTACTS, 
                    person: item 
                });
            })
            .catch( error => {
                throw error
            })
    }
);

export const addToFavourites = item => (
    dispatch => {
        axios
            .patch(`https://people-e69a5-default-rtdb.firebaseio.com/people/${item.id}.json`, {
                isFavourite: true
            })
            .then( response => {
                dispatch({
                    type: ADD_TO_FAVOURITES, 
                    person: item 
                });
            })
            .catch( error => {
                throw error
            })
    }
);

export const removeFromFavourites = item => (
    dispatch => {
        axios
            .patch(`https://people-e69a5-default-rtdb.firebaseio.com/people/${item.id}.json`, {
                isFavourite: false
            })
            .then( response => {
                dispatch({
                    type: REMOVE_FROM_FAVOURITES, 
                    person: item 
                });
            })
            .catch( error => {
                throw error
            })
    }
);

export const filterPeople = item => (
    {
        type: FILTER_PEOPLE , 
        city: item 
    }
);

export const searchPeople = item => (
    {
        type: SEARCH_PEOPLE , 
        name: item 
    }
);