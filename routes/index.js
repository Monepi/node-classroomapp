var express = require('express');
var router = express.Router();

var classroom = require('../classroom');

/* GET home page. */
router.get('/', function(req, res, next) {
  classroom.index(res);
});


/* GET new class */
router.get('/newclass', function (req, res) {
  res.render('newclass', {title: 'Create Class'});
})

/* POST new class */
router.post('/newclass', function (req, res) {
    if(req.body.class == ""){
      res.render('newclass', {title: 'Create Class', error_message: 'Class name is required.'});
    }
    else{
      classroom.newClass(res, req.body.class, req.body.grade);
    }
});

/* GET classes */
router.get('/classes', function (req, res) {
    classroom.index(res);
});

/* GET Create Learners */
router.get('/createlearners', function (req, res) {
  classroom.createlearners(res);
});

/* POST Create Learners */
router.post('/createlearners', function (req, res) {
  classroom.newLearner(res, req.body.classid, req.body.name, req.body.surname, req.body.location);
});

module.exports = router;
