import React from 'react';
import Button from '@material-ui/core/Button';

function Comment(props) {
  return (
    <Button variant="contained" color="#9e9e9e" onClick={props.handleExpandClick}>
      Comments: {props.numComments}
    </Button>
  );
}

export default Comment;