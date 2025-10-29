// order-service/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Order Service is running 🚀');
});

app.listen(3000, () => {
  console.log('Order Service running on port 3000');
});
