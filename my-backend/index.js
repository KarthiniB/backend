const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.MONGODB_URI;

app.get('/', (req, res) => {
  res.send('Hello from Render backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
