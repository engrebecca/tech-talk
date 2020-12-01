import React, { useState, useContext } from 'react';
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
import API from "../../utils/API";
import { UserContext } from "../../utils/UserContext";


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
  const { user, login, logout, refreshUser } = useContext(UserContext);
  const [tags, setTags] = useState([
    // Career advice
    {
      careerAdvice: false,
      tagId: 1
    },
    // Asks
    {
      asks: false,
      tagId: 2
    },
    // Mentorship
    {
      mentorship: false,
      tagId: 3
    },
    // Events
    {
      events: false,
      tagId: 4
    },
    // Job posts
    {
      jobPost: false,
      tagId: 5
    },
    // Random
    {
      random: false,
      tagId: 6
    }
  ]);
  const [postText, setPostText] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postUser, setPostUser] = useState(1)

  const addTag = (event) => {
    // setTags({ ...tags, [event.target.name]: event.target.checked });
    const oldTags = [...tags]
    const updatedTags = oldTags.map(tag => {
      if (tag.event.target.name) {
        tag.event.target.name = event.target.checked
      }
    })
    setTags(updatedTags)
  };

  const { careerAdvice, asks, mentorship, events, jobPost, random } = tags;

  function submitForm(e) {
    e.preventDefault();
    let newPostData =
      { body: postText, title: postTitle, tags }
    console.log(newPostData);

    API.Post.createPost(newPostData)
      .then(res => {
        console.log("Post created!");
      })
      .catch(err => console.log(err));

  }
  return (

    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create your post here!
                </Typography>
        <form className={classes.form} noValidate onSubmit={submitForm}>
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
                onChange={e => setPostTitle(e.target.value)}
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
                onChange={e => setPostText(e.target.value)}
              />
            </Grid>
          </Grid>


          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Choose tags associated with your post</FormLabel>
            <div>
              <FormControlLabel
                control={<Checkbox checked={careerAdvice} onChange={addTag} name="careerAdvice" />}
                label="Career Advice"
              />
              <FormControlLabel
                control={<Checkbox checked={asks} onChange={addTag} name="asks" />}
                label="Asks"
              />
              <FormControlLabel
                control={<Checkbox checked={mentorship} onChange={addTag} name="mentorship" />}
                label="Mentorship"
              />
              <FormControlLabel
                control={<Checkbox checked={events} onChange={addTag} name="events" />}
                label="Events"
              />
              <FormControlLabel
                control={<Checkbox checked={jobPost} onChange={addTag} name="jobPost" />}
                label="Job Post"
              />
              <FormControlLabel
                control={<Checkbox checked={random} onChange={addTag} name="random" />}
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