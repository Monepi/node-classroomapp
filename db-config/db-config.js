var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/classroom');

var Schema = mongoose.Schema;

// create a schema
var classRoom = new Schema({
    className: { type: String, required: true},
    classGrade: { type: Number },
    learners: {
        learnerName : {type: String},
        learnerSurname : {type: String},
        learnerLocation : {type: String},
        learnerRegDate: {type: Date}
    }
});

var Classroom = mongoose.model('Classroom', classRoom);

module.exports = Classroom;