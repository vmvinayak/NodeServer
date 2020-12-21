const express = require('express');

const app = express();


const PORT = 3333;

app.get('/', (req, res)=>{
    res.send('<h1>my first Node App!</h1>');
})


app.listen(PORT, ()=>{
    console.log(`server starts at port ${PORT}`);
})