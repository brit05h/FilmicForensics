//required modules
const express = require('express');
const bodyParser = require('body-parser');

// creates an instance of Express
const app = express();

app.use(bodyParser.json()); // parse JSON request bodies

// defines a route to handle user review inputs
app.post('/api/reviews', (req, res) => {
  // get the review data from the request body
  const review = req.body;

  // plan to process the review data (save it to database)
  // to test, just log it to the console
  console.log('Received review:', review);

  // send response indicating the review was received
  res.status(201).json({ message: 'Review received successfully' });
});

// starting the server
const PORT = process.env.PORT || 3000; // default port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

