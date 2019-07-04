const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var router = express.Router();

router.get('/', function(req, res) {

    res.sendFile(__dirname+'/web/index.html');

});

app.use(express.static(__dirname + '/web/media'));

app.use('/', router);
app.listen(3000, () => console.log('ApiServer escoltant el port 3000!'))