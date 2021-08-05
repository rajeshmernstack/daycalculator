var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET Likes */
router.get('/read', function(req, res, next) {
    
    fs.readFile('likes.txt', 'utf8' , (err, data) => {
      if (err) {
        res.send({
            status : "0"
        })
      }
      res.json({
        status : "1",
        likes : data
      })
    });
});

/* SAVE Likes */

router.get('/write', function(req, res, next) {
    fs.writeFile("likes.txt", req.query.likes, function(err) {
        if(err) {
            res.json({
                status : "0"
            });
        }
        res.json({
            status : "1"
        });
    });
})
module.exports = router;
