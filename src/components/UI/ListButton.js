import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';

const ListButton = ({ onPress }) => (
    <IconButton onClick={onPress}>
        <ListIcon color="primary" />
    </IconButton>
)

export default ListButton;