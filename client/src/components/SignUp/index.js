import React, { useState, useEffect } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: '100%',
  },
  photoUploadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [progress, setProgress] = useState(null);
  const [validationSuccess, setValidationSuccess] = useState(false);
  const cloudinaryPreset = "io46qdvv"

  useEffect(() => {
    if (!firstName || !lastName || !email || !password || !organization || !role || !location || !github || !website || !bio || !imageUrl) {
      setValidationSuccess(() => false)
      return
    }
    setValidationSuccess(() => true)
  }, [firstName, lastName, email, password, organization, role, location, github, website, bio, imageUrl]);

  useEffect(() => {
    if (progress === null) {
      return
    }
    const handle = setTimeout(() => {
      const diff = Math.random() * 10;
      setProgress(Math.min(progress + diff, 100));
    }, 300)
    return () => {
      clearTimeout(handle)
    }
  }, [progress])

  function uploadImage(e) {
    let file = e.target.files[0];
    console.log(file);
    let formData = new FormData();
    formData.append("file", file)
    formData.append("upload_preset", cloudinaryPreset)
    console.log(formData);
    setProgress(0)

    API.User.createImage(formData)
      .then(res => {
        console.log(res.data);
        setImageUrl(res.data.secure_url)
        setProgress(null)
      })
      .catch(err => console.log(err));
  }

  function submitForm(e) {
    e.preventDefault();
    let userSignupData =
      { firstName, lastName, email, password, bio, organization, role, location, github, website, imageUrl }
    console.log(userSignupData);

    API.User.create(userSignupData)
      .then(res => {
        console.log("User created!");
      })
      .catch(err => console.log(err));

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate encType="multipart/form-data" onSubmit={submitForm} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="organization"
                label="Organization"
                name="organization"
                autoComplete="organization"
                value={organization}
                onChange={e => setOrganization(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="role"
                label="Role"
                name="role"
                autoComplete="organization-title"
                value={role}
                onChange={e => setRole(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="bio"
                label="Bio"
                name="bio"
                autoComplete="bio"
                value={bio}
                onChange={e => setBio(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="address-level2"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="github"
                label="GitHub Link"
                name="github"
                autoComplete="url"
                value={github}
                onChange={e => setGithub(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="website"
                label="Website"
                name="website"
                autoComplete="url"
                value={website}
                onChange={e => setWebsite(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button variant="contained" component="label" className={classes.photoUploadBtn}>
            Upload Profile Picture
            <input type="file" onChange={uploadImage} hidden />
          </Button>
          {imageUrl ?
            <Box
              display="flex"
              marginTop="10px"
            >
              <Box m="auto">
                <img src={imageUrl} width={300} height={300}></img>
              </Box>
            </Box>
            :
            progress !== null && <div className={classes.root}>
              <Box
                display="flex"
                marginTop="10px"
              >
                <Box m="auto">
                  <CircularProgress />
                </Box>
              </Box>
            </div>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validationSuccess}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}