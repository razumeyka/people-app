import { 
    SET_PEOPLE,
    ADD_TO_PEOPLE,
    REMOVE_FROM_PEOPLE,
    ADD_TO_CONTACTS,
    REMOVE_FROM_CONTACTS,
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    FILTER_PEOPLE,
    SEARCH_PEOPLE
} from "../actions/people";
 
const initialState = {
    items: [],
    people: [],
    contacts: [],
    favourites: [],
    cities: [],
};

export default (state = initialState, action={}) => {
    switch (action.type) {
        case SET_PEOPLE:
            const citiesList = () => {
                const cities = action.people.map(item => item.city);
                const result = [];

                cities.forEach( city => {
                    if (!result.includes(city)) {
                        result.push(city);
                    }
                });
                return result;
            };

            return {
                ...state,
                items: action.people,
                people: action.people,
                contacts: action.people.filter( item => item.isContact),
                favourites: action.people.filter( item => item.isFavourite),
                cities: citiesList()
            }
        case ADD_TO_PEOPLE:
            const newPerson = action.person;
            const updatedCities = [...state.cities];
            const updatedPeople = [...state.items];

            updatedCities.push(newPerson.city);
            updatedPeople.push(newPerson);
    
            return {
                ...state,
                items: updatedPeople,
                people: updatedPeople,
                contacts: updatedPeople.filter( item => item.isContact),
                favourites: updatedPeople.filter( item => item.isFavourite),
                cities: updatedCities
            }
        case REMOVE_FROM_PEOPLE:
            const removedPerson = action.person;

            const removedPeople = [...state.items];
            const removedIndex = state.items.findIndex( item => item.id === removedPerson.id);

            removedPeople.splice(removedIndex, 1);

            return {
                ...state,
                items: removedPeople,
                people: removedPeople,
                contacts: removedPeople.filter( item => item.isContact),
                favourites: removedPeople.filter( item => item.isContact)
            }
        case SEARCH_PEOPLE:
            const searchName = action.name.toLowerCase();
            let foundPeople;
            if (action.name !== '') {
                foundPeople = state.items.filter( item => (
                    item.name.toLowerCase().includes(searchName)
                ));
            } else {
                foundPeople= state.items;
            }

            return {
                ...state,
                people: foundPeople,
            }
        case FILTER_PEOPLE:
            let filteredPeople;
            if (action.city !== 'all') {
                filteredPeople = state.items.filter( item => (
                    item.city === action.city
                ));
            } else {
                filteredPeople = state.items;
            }

            return {
                ...state,
                people: filteredPeople,
            }
        case ADD_TO_CONTACTS:
            const newContact = action.person;

            const newContactPeople = [...state.people];
            const newContactIndex = state.people.findIndex( item => item.id === newContact.id);
            newContactPeople[newContactIndex].isContact = true;

            return {
                ...state,
                people: newContactPeople,
                contacts: [...state.contacts, newContact],
                favourites: newContactPeople.filter( item => item.isFavourite),
            }
        case REMOVE_FROM_CONTACTS:
            const removedContact = action.person;

            const removedContactPeople = [...state.people];
            const removedContactIndex = state.people.findIndex( item => item.id === removedContact.id);
            removedContactPeople[removedContactIndex].isContact = false;

            const updatedContacts = [...state.contacts];
            const updatedContactIndex = state.contacts.findIndex( item => item.id === removedContact.id);
            updatedContacts.splice(updatedContactIndex, 1);

            return {
                ...state,
                people: removedContactPeople,
                contacts: updatedContacts,
                favourites: removedContactPeople.filter( item => item.isFavourite),
            }
        case ADD_TO_FAVOURITES:
            const favouritePerson = action.person;

            const newFavouritePeople = [...state.people];
            const newFavouriteIndex = state.people.findIndex( item => item.id === favouritePerson.id);
            newFavouritePeople[newFavouriteIndex].isFavourite = true;

            return {
                ...state,
                people: newFavouritePeople,
                contacts: newFavouritePeople.filter( item => item.isContact),
                favourites: [...state.favourites, favouritePerson]
            }
        case REMOVE_FROM_FAVOURITES:
            const removedFavourite = action.person;

            const removedFavouritePeople = [...state.people];
            const removedFavouriteIndex = state.people.findIndex( item => item.id === removedFavourite.id);
            removedFavouritePeople[removedFavouriteIndex].isFavourite = false;

            const updatedFavourites = [...state.favourites];
            const updatedFavouriteIndex = state.favourites.findIndex( item => item.id === removedFavourite.id);
            updatedFavourites.splice(updatedFavouriteIndex, 1);

            return {
                ...state,
                people: removedFavouritePeople,
                contacts: removedFavouritePeople.filter( item => item.isContact),
                favourites: updatedFavourites
            }
        default:
            return state;
    }
}