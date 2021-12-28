import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

import InputField from '../UI/InputField';
import Colors from '../../constants/colors';
import * as peopleActions from '../../app/actions/people';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    margin-top: 50px;
`;

const Heading = styled.div`
    font-size: 36px;
    font-weight: 700;
    color: ${Colors.primary};
    margin: 0 0 20px;
`;

const Control = styled.div`
    margin: 0 0 10px;
`;

const useStyles = makeStyles((theme) => ({
    button: {
      width: '200px',
      borderRadius: '20px',
      marginBottom: theme.spacing(1),
      marginRight: 'auto',
      marginLeft: 'auto',
    },
}));

const CreateContact = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [form, setForm] = useState({
        id: new Date().toString(),
        name: "",
        city: "",
        avatar: "",
        social_networks:{
            facebook:"",
            twitter:"",
            instagram:"",
            linkedin:""
        },
        company: "Soft solutions",
        position: "",
        isFavourite: false,
        isContact: true
    });

    const changeNameHandler = (event) => {
        setForm({ ...form, name: event.target.value });
    };

    const changeCityHandler = (event) => {
        setForm({ ...form, city: event.target.value });
    };

    const changePositionHandler = (event) => {
        setForm({ ...form, position: event.target.value });
    };

    const submitFormHandler = () => {
        dispatch(peopleActions.addToPeople(form))
    }

    return (
        <Form>
            <Heading>Create new contact</Heading>
            <Control>
                <InputField 
                    id='outlined-basic'
                    type='text'
                    label='name' 
                    variant='outlined' 
                    onChange={changeNameHandler}
                />
            </Control>
            <Control>
                <InputField 
                    id='outlined-basic'
                    type='text'
                    label='position' 
                    variant='outlined' 
                    onChange={changePositionHandler}
                />
            </Control>
            <Control>
                <InputField 
                    id='outlined-basic'
                    type='text'
                    label='city' 
                    variant='outlined' 
                    onChange={changeCityHandler}
                />
            </Control>
            <Control>
                <Button 
                    variant="outlined" 
                    size="small" 
                    color="primary" 
                    className={classes.button}
                    onClick={submitFormHandler}
                >Create</Button>
            </Control>
        </Form>
    )
};

export default CreateContact;