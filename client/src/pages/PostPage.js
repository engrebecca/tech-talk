import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, TextField, Button, CssBaseline, FormLabel, FormControl, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import API from "../utils/API";
import Navbar from "../components/Navbar";
import StickyFooter from "../components/StickyFooter";
import CardPost from "../components/CardPost";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        backgroundColor: '#f3e5f5'
    },
    paper: {
        maxWidth: 750,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    card: {
        margin: 'auto',
        width: '50%',
        marginTop: '20px',
        padding: '20px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }
}));


function PostPage() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const [postText, setPostText] = useState("");
    const [postTitle, setPostTitle] = useState("");

    // Load posts & comments when page renders and when new post or comments are made
    useEffect(() => {
        loadPosts()
    }, [posts]);

    function loadPosts() {
        API.Post.getPost()
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    }

    const [tags, setTags] = useState([
        {
            name: "careerAdvice",
            checkedValue: false,
            id: 1
        },
        {
            name: "asks",
            checkedValue: false,
            id: 2
        },
        {
            name: "mentorship",
            checkedValue: false,
            id: 3
        },
        {
            name: "events",
            checkedValue: false,
            id: 4
        },
        {
            name: "jobPost",
            checkedValue: false,
            id: 5
        },
        {
            name: "random",
            checkedValue: false,
            id: 6
        }
    ]);

    // Function to track tags a user selects to add to a post
    const addTag = (event) => {
        const updatedTags = tags.map(function (tag) {
            return (tag.name === event.target.name) ?
                { ...tag, checkedValue: true }
                :
                { ...tag };
        });
        console.log(updatedTags)
        setTags(updatedTags)
    };

    const { careerAdvice, asks, mentorship, events, jobPost, random } = tags;

    // Function to submit a new post
    function submitPost(e) {
        e.preventDefault();
        let selectedTags = []
        for (let i = 0; i < tags.length; i++) {
            console.log(tags[i]);
            if (tags[i].checkedValue) {
                selectedTags.push(tags[i].id);
            }
        }
        let newPostData =
            { body: postText, title: postTitle, selectedTags }

        API.Post.createPost(newPostData)
            .then(res => {
                console.log("Post created!");
                loadPosts()
            })
            .catch(err => console.log(err));
        e.target.reset();
        const clearTags = tags.map(function (tag) {
            return { ...tag, checkedValue: false }
        });
        console.log(clearTags)
        setTags(clearTags)
    }

    return (
        <div className={classes.root}>
            <Navbar />
            <CssBaseline />
            <Card className={classes.root, classes.card}>
                <Typography component="h1" variant="h5">
                    Create your post here!
                    </Typography>
                <form className={classes.form} noValidate onSubmit={submitPost}>
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
                        color="#9e9e9e"
                        className={classes.submit}
                    >
                        Submit
                        </Button>
                </form>
            </Card>
            {/* Map through all the posts from db and create a card to display info */}
            {posts.map(post => {
                return (<CardPost id={post.id} postBody={post.body} postTitle={post.title} photo={post.User.photo} firstName={post.User.firstName} lastName={post.User.lastName} role={post.User.role} tags={post.PostTags} numComments={post.Comments.length} comments={post.Comments} />)
            })}
            <StickyFooter />

        </div >

    )
}

export default PostPage;
