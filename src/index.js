const express = require('express');

const app = express();
require('dotenv').config()

app.set('port', 4000);
app.use(express.json())

app.use(require('./routes/boletas'))
app.use(require('./routes/usuarios'))
app.use(require('./routes/cines'))
app.use(require('./routes/descuentos'))
app.use(require('./routes/salas'))
app.use(require('./routes/actores'))
app.use(require('./routes/directores'))
app.use(require('./routes/genero'))
app.use(require('./routes/peliculas'))

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})