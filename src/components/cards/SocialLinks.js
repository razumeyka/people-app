import React from 'react';
import styled from 'styled-components';
import { 
    Facebook, 
    Twitter, 
    Instagram, 
    LinkedIn 
} from '@material-ui/icons';

import Colors from '../../constants/colors';

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 10px 0;
`;

const Link = styled.a`
    width: 34px;
    height: 34px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid ${Colors.primary};
    padding: 5px;
    margin: 0 5px;
`;

const SocialLinks = (props) => {
    const { links } = props;

    return (
        <Container>
            {links.facebook && <Link href={links.facebook}>
                <Facebook color='primary' fontSize="small" />
            </Link>}
            {links.twitter && <Link href={links.twitter}>
                <Twitter color='primary' fontSize="small" />
            </Link>}
            {links.instagram && <Link href={links.instagram}>
                <Instagram color='primary' fontSize="small" />
            </Link>}
            {links.linkedin && <Link href={links.linkedin}>
                <LinkedIn color='primary' fontSize="small" />
            </Link>}
        </Container>
    );
};

export default SocialLinks;