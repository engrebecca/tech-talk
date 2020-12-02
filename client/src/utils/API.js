import axios from 'axios';

const URL = "https://api.cloudinary.com/v1_1/tech-talk/upload"

export default {

    User: {
        create(userSignupData) {
            return axios.post("/api/user", userSignupData);
        },

        createImage(formData) {
            return axios.post(URL, formData)
        },

        getUser() {
            return axios.get("/api/user");
        },

        getUserById(userId) {
            return axios.get("/api/user/" + userId);
        },

        login(userLoginData) {
            console.log("api login")
            return axios.post("/api/user/login", userLoginData);
        },

        logout() {
            console.log("api logout")
            return axios.post("/api/user/logout");
        },
        getCurrent() {
            return axios.get("/api/user/current");
        }
    },
    Post: {
        getPost() {
            return axios.get("/api/post");

        },
        createPost(newPostData) {
            return axios.post("/api/post", newPostData)
        }
    },
    Comment: {
        createComment(newCommentData) {
            return axios.post("/api/comments", newCommentData)
        }
    }
}


