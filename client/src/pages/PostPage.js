import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Paper, Grid, Card, CardContent, Collapse, CardActions, TextField, Button, CssBaseline, FormLabel, FormControl, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import API from "../utils/API";
import Navbar from "../components/Navbar";
import PostTitle from "../components/PostTitle";
import PostComment from "../components/PostComment-Content";
import BtnTags from "../components/Btn-tags";
import BtnComment from "../components/Btn-comments";
import Avatar from "../components/Avatar";
import UserName from "../components/UserName";
import UserRole from "../components/UserRole";
import { UserContext } from "../utils/UserContext";
import StickyFooter from "../components/StickyFooter";

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
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [postId, setPostId] = useState();
    const [postText, setPostText] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [commentSubmitStatus, setCommentSubmitStatus] = useState(false);
    const [postSubmitStatus, setPostSubmitStatus] = useState(false)

    // Load posts & comments when page renders and when new post or comments are made
    useEffect(() => {
        loadPosts()
    }, [commentSubmitStatus, postSubmitStatus]);

    function loadPosts() {
        API.Post.getPost()
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    }

    // On click function to handle when user clicks button to open comments on a post
    const handleExpandClick = () => {
        setExpanded(!expanded);
        console.log(expanded)
    };

    // Function to submit a new comment
    function submitComment(e) {
        e.preventDefault();
        let newCommentData = { text: newComment, userId: user.id, postId: postId }
        console.log(newCommentData);

        API.Comment.createComment(newCommentData)
            .then(res => {
                console.log("Comment created!");
            })
            .catch(err => console.log(err));


        setCommentSubmitStatus(!commentSubmitStatus);
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
            })
            .catch(err => console.log(err));
        setPostSubmitStatus(!postSubmitStatus);
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
                return (
                    <Card className={classes.root, classes.card} key={post.id}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item xs zeroMinWidth>
                                {/* Map through all the tags associated with a post and create buttons for each */}
                                {post.PostTags.map(tag => {
                                    return (
                                        <BtnTags tags={tag.Tag.name} key={tag.id} />
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                {/* Pass props to the Avatar component to render each user's individual information */}
                                <Avatar photo={post.User.photo} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                {/* Pass props to the UserName component to render each user's individual information */}
                                <UserName firstName={post.User.firstName} lastName={post.User.lastName} />
                                <UserRole role={post.User.role} />
                            </Grid>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            {/* Pass props to the PostTitle component to render each post title */}
                            <PostTitle postTitle={post.title} />
                            {/* Pass props to the PostComment component to render each post body text */}
                            <PostComment postBody={post.body} />
                            {/* Logic for opening and closing the comments with expand more icon */}
                            <CardActions disableSpacing>
                                <div
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <BtnComment numComments={post.Comments.length} />
                                </div>
                            </CardActions>
                            {/* Hidden comments that display when user clicks the expand more icon */}
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    {/* Form for posting new comments */}
                                    <form className={classes.form} noValidate onSubmit={submitComment}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <TextField
                                                    name="newComment"
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="newComment"
                                                    label="Comment"
                                                    autoFocus
                                                    id={post.id}
                                                    onChange={e => {
                                                        setNewComment(e.target.value);
                                                        setPostId(e.target.id);
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} style={{ textAlign: "right", margin: "10px" }}>
                                                <Button item xs={4}
                                                    type="submit"
                                                    variant="contained"
                                                    color="#9e9e9e"
                                                    className={classes.submit}
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                    {post.Comments.map(comment => {
                                        return (
                                            <Grid container spacing={1} key={comment.id}>
                                                {/* Map through all the comments associated with a post and create a new paper component to display */}
                                                <Grid item xs={12}>
                                                    <Paper className={classes.paper}>
                                                        <Avatar
                                                            // Pass props to the Avatar component to render each user's individual information
                                                            photo={comment.User.photo}
                                                        />
                                                        {comment.text}
                                                    </Paper>
                                                </Grid>
                                            </Grid>
                                        )
                                    })}
                                </CardContent>
                            </Collapse >
                        </Grid>
                    </Card >
                )
            })}
            <StickyFooter />

        </div >

    )
}

export default PostPage;
