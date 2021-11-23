import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Grid, makeStyles } from '@material-ui/core';

import Card from './Card';

const useStyles = makeStyles( (theme) => ({
    cardsContainer: {
        marginTop: '30px',
    },
    cardItem: {
        boxSizing: 'border-box',
        paddingTop: '20px',
        paddingBottom: '20px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('md')]: {
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            '&:nth-child(2n)': {
                borderRight: '0',
            },
        },
        [theme.breakpoints.up('lg')]: {
            '&:nth-child(2n)': {
                borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            },
            '&:nth-child(3n)': {
                borderRight: '0',
            },
        },
        [theme.breakpoints.up('xl')]: {
            '&:nth-child(3n)': {
                borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            },
            '&:nth-child(4n)': {
                borderRight: '0',
            },
        },
    },
}));

const Cards = () => {
    const [ people, setPeople ] = useState([]);
    const [ isPending, setIsPending] = useState(false);
    const [ errorMessage, setErrorMessage] = useState(null);
    const classes = useStyles();

    const fetchData = useCallback( () => {
        setIsPending(true);
        setErrorMessage(null);

        axios
            .get('data/data.json')
            .then( response => {
                setPeople(response.data.people)
            })
            .catch( error => {
                setErrorMessage(error.message);
            })
        
        setIsPending(false);
    }, [])

    useEffect( () => {
        fetchData(); 
    },[fetchData])

    return (
        <div>
            { isPending && <p>Loaging</p> }
            { !isPending && errorMessage && <p>{errorMessage}</p>}
            { !isPending && !errorMessage && 
                <Grid container spacing={3} className={classes.cardsContainer}>
                    { people.map( person => (
                        <Grid 
                            item
                            key={person.id} 
                            xs={12} 
                            md={6} 
                            lg={4}
                            xl={3}
                            className={classes.cardItem}
                        >
                            <Card person={person} />
                        </Grid>
                    ))}
                </Grid>
            }
        </div>
    );
};

export default Cards;