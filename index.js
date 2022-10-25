const express = require('express');
const app = express();
const cors = require('cors')

const courses = require('./data/courses.json')
app.use(cors());

const port = process.env.Port || 5000;

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.listen(port, ()=>{
    console.log('server is running', port);
})