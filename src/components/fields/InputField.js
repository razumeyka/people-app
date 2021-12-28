import React from 'react';
import { TextField } from '@material-ui/core';

const InputField = ({ id, type, label, variant, onChange }) => (
    <TextField 
        id={id}
        type={type}
        label={label} 
        variant={variant}
        onChange={onChange}
    />
);

export default InputField;