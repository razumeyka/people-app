import React from 'react';
import styled from 'styled-components';
import { Avatar, Button, makeStyles } from '@material-ui/core';

import SocialLinks from './UI/SocialLinks';
import Colors from '../constants/colors';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: '0 auto',
  },
  button: {
    width: '100%',
    maxWidth: '230px',
    borderRadius: '20px',
    marginBottom: theme.spacing(1),
    marginRight: 'auto',
    marginLeft: 'auto',
  }
}));

const CardWrapper = styled.div`
    text-align: center;
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

const Card = (props) => {
    const { person } = props;
    const classes = useStyles();

    return (
        <CardWrapper>
            <Avatar 
                alt='avatar' 
                src={person.avatar} 
                className={classes.avatar} 
            />
            <Name>{person.name}</Name>
            <Position>{person.position}</Position>
            <SocialLinks links={person.social_networks} />
            <City>{person.city}</City>
            <Buttons>
                { !person.isContact && <Button variant="outlined" size="small" color="primary" className={classes.button} >Add to contacts</Button>}
                { person.isContact && <Button variant="outlined" size="small" style={{color: 'red', borderColor: 'red'}} className={classes.button}>Delete from contacts</Button>}
                { !person.isFavourite && <Button variant="outlined" size="small" color="primary" className={classes.button}>Add to favourites</Button>}
                { person.isFavourite && <Button variant="outlined" size="small" style={{color: 'red', borderColor: 'red'}} className={classes.button}>Delete from favourites</Button>}
            </Buttons>
        </CardWrapper>
    );
};

export default Card;

