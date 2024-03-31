// Import Express and Axios
const express = require('express');
const axios = require('axios');

// Initialize the Express application
const app = express();

// Define the port to run the server on
const PORT = 3000;

// Create a route to handle GET requests
app.get('/fetch-availability-zone', async (req, res) => {
    try {
        // The URL from which we want to fetch data
        const url = 'http://169.254.169.254/latest/meta-data/placement/availability-zone';

        // Making a GET request to the specified URL with custom header
        const response = await axios.get(url, {
            headers: {
                'X-aws-ec2-metadata-token': 'AQAEABUlqXs8wCetMEXYr40nRIOMT3HYihEJX1Bjya3Nl9az-SI8Aw=='
            }
        });

        // Sending the response back to the client
        res.send(response.data);
        console.log(response.data);
    } catch (error) {
        // Handle errors
        console.error('Error fetching the availability zone:', error);
        res.status(500).send('An error occurred while fetching the availability zone.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
