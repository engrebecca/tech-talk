import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Paper, Grid, Card, CardContent, Collapse, CardActions, IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreSharp';
import API from "../utils/API";
import Navbar from "../components/Navbar";
import NewPost from "../components/NewPost";
import PostTitle from "../components/PostTitle";
import PostComment from "../components/PostComment-Content";
import BtnTags from "../components/Btn-tags";
import BtnComment from "../components/Btn-comments";
import Avatar from "../components/Avatar";
import UserName from "../components/UserName";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
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
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


function PostPage() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        loadPosts()
    }, []);

    function loadPosts() {
        API.Post.getPost()
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Navbar />
            <NewPost />

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
                                <Avatar
                                    // Pass props to the Avatar component to render each user's individual information
                                    photo={post.User.photo}
                                ></Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                {/* Pass props to the UserName component to render each user's individual information */}
                                <UserName firstName={post.User.firstName} lastName={post.User.lastName}>
                                </UserName>
                            </Grid>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            {/* Pass props to the PostTitle component to render each post title */}
                            <PostTitle postTitle={post.title} />
                            {/* Pass props to the PostComment component to render each post body text */}
                            <PostComment postBody={post.body} />
                            {/* Logic for opening and closing the comments with expand more icon */}
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    {/* <BtnComment /> */}
                                    <Typography variant="button" display="block" gutterBottom>
                                        Comments
                                    </Typography>
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <CardActions disableSpacing>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </CardActions>
                                </Grid>
                            </Grid>
                            {/* <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions> */}
                            {/* Hidden comments that display when user clicks the expand more icon */}
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
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

        </div >

    )
}

export default PostPage;
