import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';

const GridButton = ({ onPress }) => (
    <IconButton onClick={onPress}>
        <AppsIcon color="primary" />
    </IconButton>
)

export default GridButton;