import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer(props) {
  return (
    <React.Fragment {...props}>
      <CssBaseline {...props} />
      <Container maxWidth="sm" {...props}>
        {/* <Typography component="div" style={{ height: '100vh' }} {...props} /> */}
      </Container>
    </React.Fragment>
  );
}