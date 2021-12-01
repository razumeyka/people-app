import React from 'react';
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

const Cards = ({ items }) => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3} className={classes.cardsContainer}>
                { items.map( person => (
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
        </div>
    );
};

export default Cards;