import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Avatar, Button, makeStyles } from '@material-ui/core';

import SocialLinks from './UI/SocialLinks';
import Colors from '../constants/colors';
import * as peopleActions from '../app/actions/people';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  button: {
    width: '100%',
    maxWidth: '230px',
    borderRadius: '20px',
    marginBottom: theme.spacing(1),
    marginRight: 'auto',
    marginLeft: 'auto',
  },
}));

const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    &.list {
        flex-direction: row;
        justify-content: space-between;
    }
    &.grid {
        flex-direction: column;
    }
`
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
`

const Name = styled.div`
    font-size: 26px;
    font-weight: 600;
    color: ${Colors.primary};
    margin: 10px 0;
`

const Position = styled.div`
    color: ${Colors.secondary};
`

const City = styled.div`
    color: ${Colors.secondary};
`

const Card = ({ person, list }) => {
    const [ isContact, setIsContact] = useState(person.isContact);
    const [ isFavourite, setIsFavourite] = useState(person.isFavourite);
    const classes = useStyles();
    const dispatch = useDispatch();

    const addToContactsHandler = () => {
        dispatch(peopleActions.addToContacts(person));
        setIsContact(true);
    };

    const removeFromContactsHandler = () => {
        dispatch(peopleActions.removeFromContacts(person));
        setIsContact(false);
    };

    const addToFavouritesHandler = () => {
        dispatch(peopleActions.addToFavourites(person));
        setIsFavourite(true);
    };

    const removeFromFavouritesHandler = () => {
        dispatch(peopleActions.removeFromFavourites(person));
        setIsFavourite(false);
    };

    return (
        <CardWrapper className={list ? 'list' : 'grid'} >
            <Avatar 
                alt='avatar' 
                src={person.avatar} 
                className={classes.avatar} 
            />
             <div>
                <Name>{person.name}</Name>
                <Position>{person.position}</Position>
            </div>
            <div>
                <SocialLinks links={person.social_networks} />
                <City>{person.city}</City>
            </div>
            <Buttons>
                { !isContact && 
                    <Button 
                        variant="outlined" 
                        size="small" 
                        color="primary" 
                        className={classes.button}
                        onClick={addToContactsHandler}
                    >Add to contacts</Button>
                }
                { isContact && 
                    <Button 
                        variant="outlined" 
                        size="small" 
                        style={{color: 'red', borderColor: 'red'}} 
                        className={classes.button}
                        onClick={removeFromContactsHandler}
                    >Delete from contacts</Button>}
                { !isFavourite && 
                    <Button 
                        variant="outlined" 
                        size="small" 
                        color="primary" 
                        className={classes.button}
                        onClick={addToFavouritesHandler}
                    >Add to favourites</Button>}
                { isFavourite && 
                    <Button 
                        variant="outlined" 
                        size="small" 
                        style={{color: 'red', borderColor: 'red'}} 
                        className={classes.button}
                        onClick={removeFromFavouritesHandler}
                    >Delete from favourites</Button>}
            </Buttons>
        </CardWrapper>
    );
};

export default Card;

