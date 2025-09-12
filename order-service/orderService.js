const express = require('express');
const app = express();
app.use(express.json());

app.post("/orders", (req, res) => {
    const order = req.body;
    console.log(`order received for userId: ${order.userId}`);
    res.send({message: 'Order created successfully', order});

});

app.listen(4000, () => console.log('Order service listening on port 4000'));