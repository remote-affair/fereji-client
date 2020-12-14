const express = require('express');

const app = express();

app.use(express.static('./dist/fereji'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/fereji/' }),
);

app.listen(process.env.PORT || 8080);
