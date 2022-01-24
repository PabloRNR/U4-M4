const express = require('express');
const app = express();
const morgan = require('morgan');

//seteos
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2);
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use(require('./routes/index'));
app.use('/api/catalogo',require('./routes/catalogo'));
app.use('/api/usuarios',require('./routes/usuarios'));
//app.use(require('./routes/catalogo'));
//iniciando el servidor
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
});

// app.listen(3000,() => {
//     console.log(`Server on port ${3000}`)
// });