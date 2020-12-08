import React from 'react';
import Typography from '@material-ui/core/Typography';

function PostComment(props) {
  return (
    <Typography variant="body2" component="p">
      {props.postBody}
    </Typography>
  )
}

export default PostComment;