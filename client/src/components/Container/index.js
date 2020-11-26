import React from 'react';
import Container from '@material-ui/core/Container';

export default function SimpleContainer(props) {
  return (
    <React.Fragment {...props}>
      <Container maxWidth="lg" {...props} >

      </Container>
    </React.Fragment>
  );
}