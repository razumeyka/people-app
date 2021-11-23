import React from 'react';
import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styled from 'styled-components';

import InputField from './InputField';

const useStyles = makeStyles((theme) => ({
    avatar: {
      width: '40px',
      height: '40px',
      margin: '5px 10px 0 0',
    },
    menuIcon: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
}));

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    @media (max-width: 767px) {
        margin-top: 20px;
    }
    @media (max-width: 500px) {
        flex-direction: column-reverse;
    }
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const RightCol = styled.div`
    display: flex;
    align-items: center;
    text-align: right;
    & img {
        margin-left: 10px;
    }
    @media (max-width: 500px) {
        margin-bottom: 20px;
    }
`;

const TopLine = ({ onMobileMenuToggle }) => {
    const classes = useStyles();
    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={onMobileMenuToggle}
                className={classes.menuIcon}
            >
                <MenuIcon color="primary" />
            </IconButton>
            <Container>
                <InputField />
                <RightCol>
                    <div>
                        <div>Welcome,</div>
                        <Row>
                            <Avatar className={classes.avatar}>JD</Avatar>
                            <div>Jon Doe</div>
                        </Row>
                    </div>
                    <img alt='logo' src='/assets/images/logo.png' width='70px' />
                </RightCol> 
            </Container>
        </>
    )
};

export default TopLine;