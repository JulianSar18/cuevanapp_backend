const express = require('express');

const app = express();
require('dotenv').config()

app.set('port', 4000);

app.use(require('./routes/boletas'))

app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})