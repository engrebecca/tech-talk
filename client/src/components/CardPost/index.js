import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Paper, Grid, Card, CardContent, Collapse, CardActions, TextField, Button } from '@material-ui/core';
import API from "../../utils/API";
import PostTitle from "../PostTitle";
import PostComment from "../PostComment-Content";
import BtnTags from "../Btn-tags";
import BtnComment from "../Btn-comments";
import Avatar from "../Avatar";
import UserName from "../UserName";
import UserRole from "../UserRole";
import { UserContext } from "../../utils/UserContext";

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

function postCard(props) {
    const classes = useStyles();
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [postId, setPostId] = useState();

    useEffect(() => {
        loadPosts()
    }, [posts]);

    function loadPosts() {
        API.Post.getPost()
            .then(res => {
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
                loadPosts()
            })
            .catch(err => console.log(err));
    }

    return (
        <Card className={classes.root, classes.card} key={props.id}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs zeroMinWidth>
                    {/* Map through all the tags associated with a post and create buttons for each */}
                    {props.tags.map(tag => {
                        return (
                            <BtnTags tags={tag.Tag.name} key={tag.id} />
                        )
                    })}
                </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    {/* Pass props to the Avatar component to render each user's individual information */}
                    <Avatar photo={props.photo} />
                </Grid>
                <Grid item xs zeroMinWidth>
                    {/* Pass props to the UserName component to render each user's individual information */}
                    <UserName firstName={props.firstName} lastName={props.lastName} />
                    <UserRole role={props.role} />
                </Grid>
            </Grid>
            <Grid item xs zeroMinWidth>
                {/* Pass props to the PostTitle component to render each post title */}
                <PostTitle postTitle={props.postTitle} />
                {/* Pass props to the PostComment component to render each post body text */}
                <PostComment postBody={props.postBody} />
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
                        <BtnComment numComments={props.numComments} />
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
                                        id={props.id}
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
                        {props.comments.map(comment => {
                            return (
                                <div>
                                    <Grid container wrap="nowrap" spacing={2} key={comment.id}>
                                        <Grid item>
                                            {/* Pass props to the Avatar component to render each user's individual information */}
                                            <Avatar photo={comment.User.photo} />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            {/* Pass props to the UserName component to render each user's individual information */}
                                            <UserName firstName={comment.User.firstName} lastName={comment.User.lastName} />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item style={{ marginTop: "5px" }}>
                                            {comment.text}
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        })}
                    </CardContent>
                </Collapse >
            </Grid>
        </Card >
    )
}

export default postCard;