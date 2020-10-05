const express = require('express');

const app = express();

app.use(express.static('./dist/ngx-admin'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/ngx-admin/'}),
);

app.listen(process.env.PORT || 8080);
