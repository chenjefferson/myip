const express = require('express');
const app = express();
const myip = require('./myip.js');

const PORT = process.env.PORT || 3167;

app.use('/', require('./myip.js'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
