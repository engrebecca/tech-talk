import React from 'react';
import Typography from '@material-ui/core/Typography';

function PostTitle(props) {
    return (
        <Typography gutterBottom variant="h5" component="h4" style={{ marginTop: "15px" }}>
            {props.postTitle}
        </Typography>
    )
}

export default PostTitle;