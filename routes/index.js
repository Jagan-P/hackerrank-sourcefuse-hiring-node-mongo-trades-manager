var express = require('express');
var router = express.Router();
const tradeModel = require("../models/trades");
const bodyParser = require("body-parser");
const MongooseConnection = require("../lib/mongoose.connection");
const connectionInstance = new MongooseConnection().getConnection();

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

/* GET /trades. */
router.get('/trades', function(req, res, next) {
  // res.send('<p>HTML Data</p>');
  tradeModel.find({

  }, (err, data)=>{
    console.log(err, data)
    
    res.send(data);
  })
});

/* POST /trades. */
router.post('/trades', function(req, res, next) {
  if(req && req.body) {
    tradeModel.find({

    })
    .then((data)=>{
      let documentId = [];
      data.forEach((document)=>{
        documentId.push(document.id);
      })
      console.log("in",documentId);
      return documentId.sort((a,b)=>{
        return b-a;
      });
    })
    .then((sortedDocumentsArray)=>{
      let newId = sortedDocumentsArray[0] ? sortedDocumentsArray[0]+1 : 1;
      const trade = new tradeModel({id: newId, ...req.body});

      trade.save((err, data)=>{
        // console.log(err, data);
        if(err) {
          res.sendStatus(400);
        }
        else {
          res.status(201).send(data);
        }
      })
    })
  }
});

module.exports = router;
