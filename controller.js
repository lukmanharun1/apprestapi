'use-strict';

const response = require('./res');
const connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('Aplikasi REST API ku berjalan', res)
    
}
exports.tampilsemuadatamahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            cconsole.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}

// menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function  (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else { 
            response.ok(rows, res);
        }
    });    
};

// menambahkan data mahasiswa
exports.tambahMahasiswa = function (req, res) {
    const nim = req.body.nim;
    const nama = req.body.nama;
    const jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)', [nim,nama,jurusan], 
    function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
             response.ok('Berhasil Menambahkan Data', res);
        }
    });
}

// mengubah data berdasarkan id
exports.ubahMahasiswa = function (req, res) {
    const id = req.params.id_mahasiswa;
    const nim = req.body.nim;
    const nama = req.body.nama;
    const jurusan = req.body.jurusan;

    connection.query("UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?", [nim,nama, jurusan,id], function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    })
}