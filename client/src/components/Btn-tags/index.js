import React from 'react';
import Button from '@material-ui/core/Button';

function Tags(props) {
  return (
    <Button variant="contained" color="primary">
      {props.tags}
    </Button>
  );
}

export default Tags;