const express = require('express');
const app = express();
const cors = require('cors')

const courseName = require('./data/name.json')
const courses = require('./data/courses.json')
app.use(cors());

const port = process.env.Port || 5000;

app.get('/courses-name', (req, res)=>{
    res.send(courseName)
})






app.get('/courses', (req, res)=>{
    res.send(courses)
})


app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    const coursesDetails = courses.find(coures=> coures._id=== id)
    res.send(coursesDetails)
})

app.listen(port, ()=>{
    console.log('server is running', port);
})