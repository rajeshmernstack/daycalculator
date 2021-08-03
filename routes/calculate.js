var express = require('express');
var router = express.Router();

/* GET Day by Date listing. */
router.get('/', function(req, res, next) {
    var date = req.query.date;
    if(date.length != 10) {
        let resp = {
            "status" : "failed",
            "date" : date,
            "error" : "Incorrect Date"
        }
        res.json(resp);
    }else {
        var dateArr = date.split("/");
        let today = dateArr[0];
        let month = dateArr[1];
        let year = dateArr[2];
        var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var day;

        let codeOfMonth;
        
        today = parseInt(today.replace(/^0+/, ''));
        month = parseInt(month.replace(/^0+/, ''));
        year = parseInt(year.replace(/^0+/, ''));

        if(month === 1 || month === 10) {
            codeOfMonth = 0;
        }else if(month === 2 || month === 3 || month === 11) {
            codeOfMonth = 3;
        }else if(month === 4 || month === 7){
            codeOfMonth = 6;
        }else if(month === 5) {
            codeOfMonth = 1;
        }else if(month === 6) {
            codeOfMonth = 4;
        }else if(month === 8) {
            codeOfMonth = 2;
        }else if(month === 9 || month === 12) {
            codeOfMonth = 5;
        }
        day = daysOfWeek[(today + codeOfMonth + (year-1900) + Math.trunc(((year-1900)/4)))%7];
        var data = {
            "status" : "success",
            "date" : date,
            "day" : day
        };
        res.json(data);
    }
  
});

module.exports = router;
