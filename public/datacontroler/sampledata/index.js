var userInfoModel = require('../dbmodel');

module.exports = function(app) {
    app.get('/api/userInfoData', function(req, res) {
        var userInfo = [{
                ReportId: '12345',
                FirstName: 'Mohan',
                LastName: 'Krishna',
                HusbandWife: 'Rama devi',
                Age: '26',
                DateOfAdmission: '23-2-2019',
                UserInputEmail: 'mohan@gmail.com',
                Mobile: '9123456789',
                Address: 'HSR Layout',
                DiagnosisDescription: 'Viral fever with asthama',
                TreatmentDescription: 'Dart tablet and Paracetmol'
            },
            {
                ReportId: '987654',
                FirstName: 'Raghuram',
                LastName: 'Rajan',
                HusbandWife: 'Manisha',
                Age: '36',
                DateOfAdmission: '12-2-2014',
                UserInputEmail: 'raghuram@gmail.com',
                Mobile: '91234565879',
                Address: 'Koramangala',
                DiagnosisDescription: 'Viral fever with asthama',
                TreatmentDescription: 'Dolopher 234'
            }
        ];
        userInfoModel.create(userInfo, function(err, data) {
            res.send(data);
        });
    });
};