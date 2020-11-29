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
            return axios.post("/api/login", userLoginData);
    },

    Post: {
        getPost() {
            return axios.get("/api/post/");

        }

      


    }
}

