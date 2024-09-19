// Create web server
// 1. Import express module
// 2. Create an express application
// 3. Create a route to handle comment requests
// 4. Start the server
// 5. Listen on port 3000

// 1. Import express module
const express = require('express');

// 2. Create an express application
const app = express();

// 3. Create a route to handle comment requests
app.get('/comments', (req, res) => {
  res.send('Hello');
});

// 4. Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// 5. Listen on port 3000
// Run the server by executing the command: node comments.js
// Open the browser and go to http://localhost:3000/comments
// You should see the response: Hello
// Press Ctrl+C to stop the server
// Update the code and restart the server to see the changes