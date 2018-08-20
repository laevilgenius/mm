var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var bodyParser = require('body-parser')

var files = require('./files.json')

class DevServer {
    static registerApi(app) {
        app.get('/api/list', function(req, res) {
            var path = req.query.path
            if (path === '/') path = ''
            res.json(files.filter(f => f.path.substring(0, f.path.lastIndexOf('/')) === path));
        });
        app.post('/api/upload', upload.single('file'), function(req, res) {
            files.push({
                "type": "file",
                "path": req.body.path + '/' + req.file.originalname,
                "timestamp": Date.now(),
                "size": req.file.size,
            })

            res.sendStatus(200);
        });
        app.post('/api/new-dir', bodyParser.json(), function(req, res) {
            files.push({
                "type": "dir",
                "path": req.body.path,
                "timestamp": Date.now(),
            })

            res.sendStatus(200);
        });
        app.post('/api/delete', bodyParser.json(), function(req, res) {
            files.splice(files.findIndex(file => file.path == req.body.path), 1);

            res.sendStatus(200);
        });
    }
}

module.exports = DevServer
