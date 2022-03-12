const express = require('express');

const app = express();
require('dotenv').config()

app.set('port', 4000);
app.use(express.json())

app.use(require('./routes/boletas'))
app.use(require('./routes/usuarios'))
app.use(require('./routes/cines'))

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})