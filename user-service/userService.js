const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/user', async (req, res) => {
    const user = req.body;

    await axios.post('http://localhost:4000/orders',
        {userId: user.id});

        res.send({message: 'User created successfully', user})
    });
    app.listen(3000, () => {
        console.log('User service listening on port 3000');
    });

// To run this service, use the command: node userService.js

