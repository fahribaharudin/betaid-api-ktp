var express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('underscore'),
    app = express();

var id = 7;
var data = [
    { 
        NIK: 12001, 
        nama: 'Fahri Baharudin', 
        ttl: 'Wonosobo, 16-11-1993', 
        jenis_kelamin: 'L',
        alamat: 'Jlamprang, Wonosobo', 
        agama: 'Islam', 
        statusKawin: 'Belum Kawin', 
        pekerjaan: 'Mahasiswa',
        kewarganegaraan: 'Indonesia',
        masaBerlaku: '16-11-2017',
        namaIbu: 'Jamilah'
    },
    { 
        NIK: 12002, 
        nama: 'Dwi Hardiman', 
        ttl: 'Wonosobo, 21-09-1994', 
        jenis_kelamin: 'L',
        alamat: 'Menjer, Wonosobo', 
        agama: 'Islam', 
        statusKawin: 'Belum Kawin', 
        pekerjaan: 'Mahasiswa',
        kewarganegaraan: 'Indonesia',
        masaBerlaku: '21-09-2017',
        namaIbu: 'Tumini'
    },
    { 
        NIK: 12003, 
        nama: 'Maulana Nur Aji', 
        ttl: 'Wonosobo, 10-10-1993', 
        jenis_kelamin: 'L',
        alamat: 'Jlamprang, Wonosobo', 
        agama: 'Islam', 
        statusKawin: 'Belum Kawin', 
        pekerjaan: 'Mahasiswa',
        kewarganegaraan: 'Indonesia',
        masaBerlaku: '10-10-2017',
        namaIbu: 'Siam'
    },
];

app.use(bodyParser.json());
app.use(express.static('./public'));

app.route('/ktp')
    .get(function(req, res) {
        res.json({ data: data, status: 200 });
    });

app.route('/ktp/:id')
    .get(function(req, res) {
        var person = _.find(data, function(item) {
            return item.NIK == req.params.id;
        }); 

        if (person !== undefined) {
            res.json({ data: person, status: 200 });
        } else {
            res.status(404).json({ error: { message: 'Data tidak ditemukan' }, status: 404 });
        }
    });

app.route('/')
    .get(function(req, res) {
        res.redirect('/ktp');
    });

app.get('*', function(req, res, next) {
    var err = new Error();
    err.status = 404;
    next(err);
});
 
// handling 404 errors
app.use(function(err, req, res, next) {
    if(err.status !== 404) {
        return next();
    }
 
    res.json({ message: err.message || 'Endpoint not found', status: 404 });
});


app.listen(process.env.PORT || 3000, function() {
    console.log('server running!');
});

