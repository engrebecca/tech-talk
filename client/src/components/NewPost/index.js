import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function CheckboxesGroup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        careerAdvice: false,
        asks: false,
        mentorship: false,
        events: false,
        jobPost: false,
        random: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { careerAdvice, asks, mentorship, events, jobPost, random } = state;
    //   const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        
            <Container component="main" maxWidth="md">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Create your post here!
                </Typography>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="postTitle"
                        name="postTitle"
                        variant="outlined"
                        required
                        fullWidth
                        id="postTitle"
                        label="Title"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        multiline={true}
                        rows={3}
                        id="postText"
                        label="Text"
                        name="postText"
                        autoComplete="postText"
                      />
                    </Grid>
                  </Grid>


            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Choose tags associated with your post</FormLabel>
                <div>
                    <FormControlLabel
                        control={<Checkbox checked={careerAdvice} onChange={handleChange} name="careerAdvice" />}
                        label="Career Advice"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={asks} onChange={handleChange} name="asks" />}
                        label="Asks"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={mentorship} onChange={handleChange} name="mentorship" />}
                        label="Mentorship"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={events} onChange={handleChange} name="events" />}
                        label="Events"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={jobPost} onChange={handleChange} name="jobPost" />}
                        label="Job Post"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={random} onChange={handleChange} name="random" />}
                        label="Random"
                    />
                </div>

               
            </FormControl>

            <Button item xs={4}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Submit
                  </Button>

                </form>
              </div>

            </Container>
   

    );
}