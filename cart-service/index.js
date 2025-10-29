const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🛒 Cart Service Running');
});

app.listen(3000, () => {
  console.log('Cart service running on port 3000');
});
