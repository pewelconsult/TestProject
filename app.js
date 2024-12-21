const express = require('express');
const app = express();
const port = 8000;

// Define a GET route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// Define a GET route
app.get('/kumi', (req, res) => {
    res.send('This is Kumi Isaac Kwaku Newton!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
