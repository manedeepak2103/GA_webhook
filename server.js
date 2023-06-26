const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse JSON bodies
app.use(bodyParser.json());

// Handle POST requests to the webhook endpoint
app.post('/webhook', (req, res) => {
  // Process the payload here
  console.log('Received payload:', req.body);

  // Respond with a success message
  res.json({ message: 'Webhook received successfully' });
});

// Create a Netlify serverless handler
const handler = serverless(app);

// Export the Netlify handler
module.exports.handler = async (event, context) => {
  // Proxy the event and context to the Netlify handler
  return await handler(event, context);
};
