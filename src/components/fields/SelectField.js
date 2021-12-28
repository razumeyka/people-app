import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Select, 
    FormControl, 
    makeStyles } from '@material-ui/core';

import * as peopleActions from '../../store/actions/people';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SelectField = () => {
    const dispatch = useDispatch();
    const cities = useSelector( state => state.people.cities );
    const [city, setCity] = useState('');
    const classes = useStyles();

    const changeCityHandle = (event) => {
        setCity(event.target.value);
        dispatch(peopleActions.filterPeople(event.target.value))
    };

    return (
        <FormControl className={classes.formControl}>
            <Select
                native
                value={city}
                onChange={changeCityHandle}
                inputProps={{
                    name: 'city',
                    id: 'city-native-simple',
                }}
            >
                <option value="all">All people</option>
                {cities.map( item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectField;