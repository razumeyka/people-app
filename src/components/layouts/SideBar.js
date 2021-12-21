import React from 'react';
import styled from 'styled-components';
import { Grid, Avatar, IconButton, makeStyles } from '@material-ui/core';
import { Settings, ExitToApp, Close } from '@material-ui/icons';

import NavBar from '../navbar/Navbar';
import Colors from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(22),
    height: theme.spacing(22),
    margin: '0 auto',
  },
  closeIcon: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
  }
}));

const SideBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 0;
    background: black;
    color: white;
    @media (max-width: 1023px) {
        width: 230px;
    }
    @media (max-width: 767px) {
        width: 100%;
        align-items: center;
        z-index: 100;
        transform: translate(-100%);
        transition: transform 0.3s linear;
        &.active {
            transform: translate(0);
        }
    }
`;

const Name = styled.div`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: ${Colors.secondary};
    margin: 10px 0;
`;

const Position = styled.div`
    text-align: center;
    color: ${Colors.primary};
`;

const BottomButtons = styled.div`
    box-sizing: border-box;
    padding: 0 40px;
    @media (max-width: 1023px) {
        padding: 0 20px;
    }
`;

const SideBar = ({ mobile, onMobileMenuToggle }) => {
    const classes = useStyles();

    const hideMobileMenuHandler = () => {
        onMobileMenuToggle();
    }
            
    return (
        <SideBarContainer className={ mobile ? 'active' : '' }>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={onMobileMenuToggle}
                className={classes.closeIcon}
            >
                <Close color="secondary" />
            </IconButton>
            <div>
                <div>
                    <Avatar 
                        alt='avatar' 
                        src='/assets/images/man.jpeg' 
                        className={classes.avatar} 
                    />
                </div>
                <Name>John Doe</Name>
                <Position>Sunscript, CEO</Position>
            </div>
            <NavBar mobile={mobile} hideMobileMenu={hideMobileMenuHandler} />
            <BottomButtons>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                        <Settings color='primary' />
                    </Grid>
                    <Grid>Settings</Grid>
                </Grid>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                        <ExitToApp color='primary' />
                    </Grid>
                    <Grid item>Logout</Grid>
                </Grid>
            </BottomButtons>
        </SideBarContainer>
    );
};

export default SideBar;