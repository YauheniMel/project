const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

app.use(express.static(`${__dirname}./../build`));
app.use(express.static(`${__dirname}./../build/static/js`));
app.use(express.static(`${__dirname}./../build/static/css`));

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
