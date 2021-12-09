import React from 'react';
import { TextField } from '@material-ui/core';

const InputField = ({ onChange }) => (
    <TextField 
        id='outlined-basic'
        type='search'
        label='Search' 
        variant='outlined' 
        onChange={onChange}
    />
);

export default InputField;