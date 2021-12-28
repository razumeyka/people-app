import React from 'react';
import { TextField } from '@material-ui/core';

const InputField = ({ id, type, label, name, variant, onChange }) => (
    <TextField 
        id={id}
        type={type}
        label={label} 
        name={name}
        variant={variant}
        onChange={onChange}
    />
);

export default InputField;