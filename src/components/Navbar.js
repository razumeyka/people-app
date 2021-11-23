import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { 
    HomeOutlined, 
    ContactsOutlined, 
    FavoriteBorderOutlined, 
    PermIdentityOutlined, 
    ListAltOutlined 
} from '@material-ui/icons';


const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const NavItem = styled.li`
    color: white;
    text-transform: uppercase;
    text-decoration: none;
`;

const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    box-sizing: border-box;
    padding: 10px 40px;

    &.active {
        background: #39a6f3;
    }

    @media (max-width: 1023px) {
        padding: 10px 20px;
    }
`;

const NavText = styled.div`
    margin-left: 5px;
`;

const NavBar = ({ mobile, hideMobileMenu }) => {
    const menuItems = [
        {
            path: '/home',
            title: 'Home',
            icon: <HomeOutlined color='white' />,
        },
        {
            path: '/contacts',
            title: 'Contacts',
            icon: <ContactsOutlined color='white' />,
        },
        {
            path: '/favourites',
            title: 'Favourites',
            icon: <FavoriteBorderOutlined color='white' />,
        },
        {
            path: '/people',
            title: 'People',
            icon: <PermIdentityOutlined color='white' />,
        },
        {
            path: '/companies',
            title: 'Companies',
            icon:  <ListAltOutlined color='white' />,
        }
    ];

    return (
    <nav>
        <NavList>
            {menuItems.map( item => <NavItem key={new Date().toString}>
                    <StyledNavLink  
                        className={ navData => navData.isActive ? 'active' : ''}
                        onClick={ () => {
                            if (mobile) {
                                hideMobileMenu()
                            }
                        }}
                        to={item.path}
                    >
                        {item.icon}
                        <NavText>{item.title}</NavText>
                    </StyledNavLink>
                </NavItem>
            )}
        </NavList>
    </nav>
    )
};

export default NavBar;