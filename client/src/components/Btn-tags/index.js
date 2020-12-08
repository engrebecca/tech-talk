import React from 'react';
import Button from '@material-ui/core/Button';

function Tags(props) {
  return (
    <Button variant="contained" style={{ marginRight: "10px", marginBottom: "15px" }}>
      {props.tags}
    </Button>
  );
}

export default Tags;