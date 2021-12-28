import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from '../../firebase/firebase';


import InputField from '../fields/InputField';
import Colors from '../../constants/colors';
import * as peopleActions from '../../store/actions/people';

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

const ErrorMessage = styled.div`
    font-size: 12px;
    color: red;
`;

const useStyles = makeStyles((theme) => ({
    button: {
        width: '200px',
        borderRadius: '20px',
        marginBottom: theme.spacing(1),
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    input: {
        display: 'none',
    },
    fileButton: {
        height: '50px',
        width: '194px',
        color: 'rgba(0, 0, 0, 0.6)',
        borderColor: 'rgba(0, 0, 0, 0.23)',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
}));

const CreateContact = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [isInitial, setIsInitial] = useState(true);
    const [form, setForm] = useState({
        id: new Date().toString(),
        username: "",
        avatar: "",
        company: "Soft solutions",
        position: "",
        city: "",
        social_networks: {
            facebook:"",
            twitter:"",
            instagram:"",
            linkedin:""
        },
        isFavourite: false,
        isContact: true
    });
    const [isFormValid, setIsFormValid] = useState({
        username: false,
        city: false,
        position: false,
    });

    const changeHandler = (event) => {
        if (event.target.value !== "") {
            setIsFormValid({ ...isFormValid, [event.target.name]: true})
        }
        setForm({ ...form, [event.target.name]: event.target.value});
    };

    const changePhotoHandler = (event) => { 
        const storageRef = ref(storage, `ava-${new Date().toISOString().replace(/:/g, '-')}.jpg`);
        uploadBytes(storageRef, event.target.files[0]).then(() => {
            getDownloadURL(storageRef).then((url) => {
                setForm({ ...form, avatar: url});
            });
        });
    };

    const changeSocialLinkHandler = (event) => {
        setForm({ 
            ...form, 
            social_networks: {
                ...form.social_networks,
                [event.target.name]: event.target.value
            }
        });
    };

    const submitFormHandler = () => {
        setIsInitial(false);
        if (form.username && form.city && form.position) {
            dispatch(peopleActions.addToPeople(form));
        } else {
            setIsFormValid(false);
        }
    }

    return (
        <Form>
            <Heading>Create new contact</Heading>
            <Control>
                <InputField 
                    id='outlined-basic'
                    type='text'
                    label='name' 
                    name='username'
                    variant='outlined' 
                    onChange={changeHandler}
                />
                {!isFormValid.username && !isInitial && <ErrorMessage>Please, enter name</ErrorMessage>}
            </Control>
            <Control>
                <label htmlFor="contained-button-file">
                    <input 
                        accept="image/*" 
                        id="contained-button-file" 
                        multiple type="file"
                        className={classes.input}
                        onChange={changePhotoHandler} 
                    />
                    <Button 
                        variant="outlined" 
                        color="primary" 
                        component="span"
                        className={classes.fileButton}
                    >
                        Upload avatar
                    </Button>
                </label>
            </Control>
            <Control>
                <InputField 
                    id='outlined-basic'
                    type='text'
                    label='position'
                    name='position' 
                    variant='outlined' 
                    onChange={changeHandler}
                />
                {!isFormValid.position && !isInitial && <ErrorMessage>Please, enter position</ErrorMessage>}
            </Control>
            <Control>
                <InputField 
                    id='outlined-basic'
                    type='text'
                    label='city' 
                    name='city'
                    variant='outlined' 
                    onChange={changeHandler}
                />
                {!isFormValid.city && !isInitial && <ErrorMessage>Please, enter city</ErrorMessage>}
            </Control>
            <Control>
                <InputField 
                    id='outlined-basic'
                    type='text'
                    label='facebook'
                    name='facebook' 
                    variant='outlined' 
                    onChange={changeSocialLinkHandler}
                />
            </Control>
            <Control>
                <InputField 
                    id='outlined-basic'
                    type='text'
                    label='instagram'
                    name='instagram' 
                    variant='outlined' 
                    onChange={changeSocialLinkHandler}
                />
            </Control>
            <Control>
                <InputField 
                    id='outlined-basic'
                    type='text'
                    label='twitter' 
                    name='twitter'
                    variant='outlined' 
                    onChange={changeSocialLinkHandler}
                />
            </Control>
            <Control>
                <InputField 
                    id='outlined-basic'
                    type='text'
                    label='linkedin'
                    name='linkedin' 
                    variant='outlined' 
                    onChange={changeSocialLinkHandler}
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