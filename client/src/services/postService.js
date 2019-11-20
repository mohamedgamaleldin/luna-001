// /client/src/services/postService.js

import axios from 'axios';

export default {
    getAll: async() => {
        let res = await axios.get(`/api/post`);
        return res.data || [];
    }
}