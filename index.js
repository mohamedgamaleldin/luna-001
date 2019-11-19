// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env_MONGODB_URI || `mongodb://localhost:27017/luna-001`);

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`luna-001 running on port ${PORT}`)
});

