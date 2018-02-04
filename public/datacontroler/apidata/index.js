var userInfoModel = require('../dbmodel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/userInfo/all', function(req, res) {
        userInfoModel.find({}, function(err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
    // app.get('/api/weatherData/all/city/:id', function(req, res) {
    //     weatherModel.find({ id: req.params.id }, function(err, result) {
    //         if (err) throw err;
    //         res.send(result);
    //     });
    // });
    app.get('/api/userInfo/all/report/:ReportId', function(req, res) {
        userInfoModel.find({ ReportId: req.params.ReportId }, function(err, result) {
            if (err) throw err;
            res.send(result);
        });
    });

    app.post('/api/userInfo/all', function(req, res) {
        if (req.body.id) {
            userInfoModel.findByIdAndUpdate({ _id: req.body.id }, {
                ReportId: req.body.ReportId,
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Gender: req.body.Gender,
                HusbandWife: req.body.HusbandWife,
                Age: req.body.Age,
                DateOfAdmission: req.body.DateOfAdmission,
                UserInputEmail: req.body.UserInputEmail,
                Mobile: req.body.Mobile,
                Address: req.body.Address,
                DiagnosisDescription: req.body.DiagnosisDescription,
                TreatmentDescription: req.body.TreatmentDescription
            }, function(err, userInfo) {
                res.send(err);
            });
        } else {
            var newUserInfoModel = userInfoModel({
                ReportId: req.body.ReportId,
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Gender: req.body.Gender,
                HusbandWife: req.body.HusbandWife,
                Age: req.body.Age,
                DateOfAdmission: req.body.DateOfAdmission,
                UserInputEmail: req.body.UserInputEmail,
                Mobile: req.body.Mobile,
                Address: req.body.Address,
                DiagnosisDescription: req.body.DiagnosisDescription,
                TreatmentDescription: req.body.TreatmentDescription
            });
            newUserInfoModel.save(function(err, userInfo) {
                res.send('success');
            });
        }
    });

};