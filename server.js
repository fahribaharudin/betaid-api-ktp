var express     = require('express'),
    fs          = require('fs'),
    bodyParser  = require('body-parser'),
    _           = require('underscore'),
    cors        = require('cors'),
    app         = express();

var penduduk = fs.readFileSync('./ktp.json');
penduduk = JSON.parse(penduduk);

var data = penduduk;

app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(cors());

app.route('/ktp')
    .get(function(req, res) {
        res.json({ data: data });
    });

app.route('/ktp/:id')
    .get(function(req, res) {
        var person = _.find(data, function(item) {
            return item.NIK == req.params.id;
        }); 

        if (person !== undefined) {
            res.json({ data: person });
        } else {
            res.status(404).json({ error: { message: 'Data tidak ditemukan', status: 404 } });
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
 
    res.json({ error: { message: err.message || 'Endpoint not found', status: 404 } });
});


app.listen(process.env.PORT || 3000, function() {
    console.log('server running!');
});