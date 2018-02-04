var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userInfoSchema = new Schema({
    ReportId: String,
    FirstName: String,
    LastName: String,
    Gender: String,
    HusbandWife: String,
    Age: String,
    DateOfAdmission: String,
    UserInputEmail: String,
    Mobile: String,
    Address: String,
    DiagnosisDescription: String,
    TreatmentDescription: String
});

var userInfoModel = mongoose.model('userInfoModel', userInfoSchema);

module.exports = userInfoModel;