import React, { useState } from 'react';
import { 
    MenuItem, 
    Select, 
    FormControl, 
    makeStyles } from '@material-ui/core';

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
    const [city, setCity] = useState('Lviv');
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                onChange={ item => setCity(item)}
            >
                <MenuItem value='Lviv'>Ukraine, Lviv</MenuItem>
                <MenuItem value='Minks'>Belarus, Minks</MenuItem>
                <MenuItem value='Gdansk'>Poland, Gdansk</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectField;