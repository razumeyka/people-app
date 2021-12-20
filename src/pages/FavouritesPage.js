import React, { useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Divider } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Title from '../components/UI/Title';
import GridButton from '../components/UI/GridButton';
import ListButton from '../components/UI/ListButton';
import SelectField from '../components/UI/SelectField';
import CardsList from '../components/CardsList';
import CardsGrid from '../components/CardsGrid';

const FavouritesPage = memo(({isLoading, errorMessage}) => {
    const favourites = useSelector( state => state.people.favourites);
    const [ isListView, setIsListView ] = useState(false);

    return (
        <div>
            <Grid 
                container 
                wrap="nowrap" 
                alignItems="center" 
                justifyContent="space-between" 
            >
                <Grid container item alignItems="center" spacing={1}>
                    <Grid item>
                        <Title title='Favourites' />
                    </Grid>
                    <Grid item>
                        <GridButton 
                            onPress={() => setIsListView(false)}
                        />
                    </Grid>
                    <Grid item>
                        <ListButton 
                            onPress={() => setIsListView(true)}
                        />
                    </Grid>
                </Grid>
                <Grid container nowrap alignItems="center" justifyContent="flex-end" spacing={1}>
                    <Grid item>
                        <LocationOnIcon color='primary' />
                    </Grid>
                    <Grid item>
                        <SelectField />
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
            { isLoading && <p>Loaging</p> }
            { !isLoading && errorMessage && <p>{errorMessage}</p>}
            { !isLoading && !errorMessage && !isListView &&
                <CardsGrid items={favourites} />
            }
            { !isLoading && !errorMessage && isListView &&
                <CardsList items={favourites} />
            }
        </div>
    )
});

export default FavouritesPage;