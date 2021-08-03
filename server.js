const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const app = express();

// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// memanggil routes
const routes = require('./routes');
routes(app);

// daftarkan menu routes index
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log('Server started on 3000');
});