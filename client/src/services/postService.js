// /client/src/services/postService.js

import axios from 'axios';

export default {
    getAll: async() => {
        const httpsAgent = new https.Agent({ rejectUnauthorized: false});
        let res = await axios.get(`/api/post`, { httpsAgent });
        return res.data || [];
    }
}