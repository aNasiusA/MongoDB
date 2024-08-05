//Importing dependencies
const express = require('express');
const { connectToDb, getDb } = require('./db');

//intit app and middleware
const app = express();

//Port to Listen
const port = 3000;

//connect to database
let db
connectToDb((err) =>{
    if (!err) {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
        db = getDb();
    }
})

//routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});