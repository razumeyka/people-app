import React from 'react';
import styled from 'styled-components';

import Colors from '../../constants/colors';

const Heading = styled.h1`
    font-size: 46px;
    font-weight: 700;
    color: ${Colors.primary};
    margin: 15px 0 30px;
    @media (max-width: 1023px) {
        font-size: 40px;
    }
    @media (max-width: 767px) {
        font-size: 26px;
    }
`

const Title = ({ title }) => <Heading>{title}</Heading>;

export default Title;