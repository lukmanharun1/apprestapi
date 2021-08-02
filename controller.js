'use-strict';

const response = require('./res');
const connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('Aplikasi REST API ku berjalan', res)
    
}
exports.tampilsemuadatamahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}