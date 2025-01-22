const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/',(req,res) => {
    res.send('the backend says this is Paul, the Capybara')
});

app.get('/a',(req,res) => {
    res.send('this is a different message, from a different route')
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

mongoose.connect('mongodb://localhost/backend', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB :)');
}).catch(error => {
    console.error(error);
});