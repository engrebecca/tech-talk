import axios from 'axios';

export default {

    User: {
        create(formData) {
            console.log(formData)
            // return axios.post("/api/user", formData, { headers: formData.getHeaders() })
            return axios.post("/api/user", formData);
        },

        getUser() {
            return axios.get("/api/user");
        }
    }
}

