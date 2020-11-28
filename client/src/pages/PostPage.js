import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import React from "react";
import Grid from '@material-ui/core/Grid';
import API from "../utils/API";
import Navbar from "../components/Navbar";
import NewPost from "../components/NewPost";
import Container from "../components/Container";
import PostTitle from "../components/PostTitle";
import PostComment from "../components/PostComment-Content";
import BtnTags from "../components/Btn-tags";
import BtnComment from "../components/Btn-comments";
// import { Card } from "@material-ui/core";
// import Row from "../components/Row";
import Avatar from "../components/Avatar";
import UserName from "../components/UserName";
import Typography from '@material-ui/core/Typography';
// import Card from "../components/Card";
// import Avatar from '@material-ui/core/Avatar';


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
    }
}));


function PostPage() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts()
    }, []);

    function loadPosts() {
        API.User.getUser()
            .then(res => {
                console.log(res.data)
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Navbar />
            <NewPost />

            {/* {posts.map(post => {
                return ( */}
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item xs zeroMinWidth>
                                {/* <Typography noWrap> */}
                                    <BtnTags></BtnTags>
                                    {/* </Typography> */}
                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar
                            // Pass props to the Avatar component to render each user's individual information
                                // photo={post.photo}
                                ></Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography noWrap>
                                {/* Pass props to the UserName component to render each user's individual information */}
                                    <UserName firstName={post.firstName} lastName={post.lastName}>
                                        </UserName>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>
                                {/* Pass props to the PostTitle component to render each user's individual information */}
                                <PostTitle postTitle= {post.title}>
                                    </PostTitle>
                            </Typography>
                            <Typography noWrap>
                                <PostComment postComment= {post.comment}>
                                    </PostComment>
                            </Typography>

                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item xs zeroMinWidth>
                                    <Typography noWrap><BtnComment></BtnComment></Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
            {/*     )
             })} */}

        </div>

    )
}

export default PostPage;
