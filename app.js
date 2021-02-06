const express = require('express');

const app = express();


const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('<h1>my first Node App!</h1>');
})


app.get('/name', (req, res)=>{
    res.send('its Vinayak');
})


app.listen(PORT, ()=>{
    console.log(`server starts at port ${PORT}`);
})