import axios from 'axios';

const cloudinaryURL = "https://api.cloudinary.com/v1_1/tech-talk/upload"

export default {

    User: {
        create(userSignupData) {
            // return axios.post("/api/user", formData, { headers: formData.getHeaders() })
            return axios.post("/api/user", userSignupData);
        },

        createImage(formData) {
            return axios.post(cloudinaryURL, formData)
        },

        getUser() {
            return axios.get("/api/user");
        },

        login(userLoginData) {
            console.log("api login")
            return axios.post("/api/user/login", userLoginData);
        },

        logout() {
            console.log("api logout")
            return axios.get("/api/user/logout");
        },
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


