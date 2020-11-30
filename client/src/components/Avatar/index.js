import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function UserImage(props) {
    return (
        <Avatar alt="User Photo" src={props.photo} />
    )
}

export default UserImage;



