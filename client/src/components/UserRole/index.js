import React from 'react';
import Typography from '@material-ui/core/Typography';

function UserName(props) {
    return (
        <Typography variant="subtitle2" gutterBottom >
            {props.role}
        </Typography>
    )
}

export default UserName;