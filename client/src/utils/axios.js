import Axios from "axios";

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND}/api/v1`,
    // baseURL: `http://localhost:8003/api/v1`,
    withCredentials: true,
});

export default axios;
