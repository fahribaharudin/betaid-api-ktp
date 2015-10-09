var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

var id = 7;
var data = {
    1: { 
        NIK: 12001, 
        nama: 'Fahri Baharudin', 
        ttl: 'Wonosobo, 16-11-1993', 
        jenis_kelamin: 'L',
        alamat: 'Jlamprang, Wonosobo', 
        agama: 'Islam', 
        statusKawin: 'Belum Kawin', 
        pekerjaan: 'Mahasiswa',
        kewarganegaraan: 'Indonesia',
        masaBerlaku: '16-11-2017'
    },
    2: { 
        NIK: 12002, 
        nama: 'Dwi Hardiman', 
        ttl: 'Wonosobo, 21-09-1994', 
        jenis_kelamin: 'L',
        alamat: 'Menjer, Wonosobo', 
        agama: 'Islam', 
        statusKawin: 'Belum Kawin', 
        pekerjaan: 'Mahasiswa',
        kewarganegaraan: 'Indonesia',
        masaBerlaku: '21-09-2017'
    },
    3: { 
        NIK: 12003, 
        nama: 'Maulana Nur Aji', 
        ttl: 'Wonosobo, 10-10-1993', 
        jenis_kelamin: 'L',
        alamat: 'Jlamprang, Wonosobo', 
        agama: 'Islam', 
        statusKawin: 'Belum Kawin', 
        pekerjaan: 'Mahasiswa',
        kewarganegaraan: 'Indonesia',
        masaBerlaku: '10-10-2017'
    },
};

app.use(bodyParser.json());
app.use(express.static('./public'));

app.route('/api/ktp')
    .get(function(req, res) {
        res.json(Object.keys(data).map(function(key) {
            return data[key];
        }));
    });

app.listen(3000, function() {
    console.log('server running on port 3000');
});

