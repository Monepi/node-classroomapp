var Classroom = require('./db-config/db-config');


    function index(res) {
        Classroom.find(function (err, results) {
            if(err)
                throw err;
            res.render('index', { title: 'Class Room | App', data: results});
        });
    }

var newClass = function (res, classname, grade) {

        var classroom = new Classroom({
              className: classname,
              classGrade : grade
           });

        classroom.save(function (err) {
            if(err)
                throw err
            res.render('newclass', { title: 'Create Class', message: 'Classroom created successful.'});
        })
    };

var createlearners = function (res) {

    Classroom.find(function (err, results) {
        if(err)
            throw err;
        res.render('learners', { title: 'Crate Learners', data: results});
    });

}

var newLearner = function (res, objectId, name, surname, location) {

    Classroom.findOneAndUpdate({ _id: objectId },
        { $set: { learnerName: name, learnerSurname: surname, learnerLocation: location, learnerRegDate: Date.now() }},
        {upsert:true},
        function (err, results) {
            if(err)
                throw err
            res.render('learners', { title: 'Crate Learners', data: results, message: 'Learner Created Successfully.'});
        }
    );

};

var updateClass = function (res, objectId, classname, grade) {

    Classroom.findOneAndUpdate({ _id: objectId },
        { $set: { className: classname, classGrade: grade}},
        function (err, results) {
            if(err)
                throw err
            console.log(results);
        });

}

var deleteClass = function (res, objectId) {

    Classroom.findOneAndRemove({ _id: objectId}, function (err, results) {
        if(err)
            throw err
        console.log(results);
    });

}


module.exports.index = index;
module.exports.newClass = newClass;
module.exports.createlearners = createlearners;
module.exports.newLearner = newLearner;
module.exports.updateClass = updateClass;
module.exports.deleteClass = deleteClass;
