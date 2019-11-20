// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// import models
require('./models/Post');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env_MONGODB_URI || `mongodb://localhost:27017/luna-001`, { useNewUrlParser: true});

app.use(bodyParser.json());

// import routes
require(`./routes/postRoute`)(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`luna-001 running on port ${PORT}`)
});

