var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var files = require('./files.json')

class DevServer {
    static registerApi(app) {
        app.get('/api/list', function(req, res) {
            var path = req.query.path
            if (path === '/') path = ''
            res.json(files.filter(f => f.dirname === path));
        });
        app.post('/api/upload', upload.single('file'), function(req, res) {
            var path = req.body.path;
            var filenameParts = req.file.originalname.split('.')
            files.push({
                "type": "file",
                "path": path + '/' + req.file.originalname,
                "timestamp": Date.now(),
                "size": req.file.size,
                "dirname": path,
                "basename": req.file.originalname,
                "extension": filenameParts.pop(),
                "filename": filenameParts[0]
            })

            res.sendStatus(200);
        });
    }
}

module.exports = DevServer