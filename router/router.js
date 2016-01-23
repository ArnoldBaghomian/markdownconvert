var express = require("express");
var router = express.Router();
var marked = require('marked');

router.post("/", function(req, res){
 	console.log("inside markdown");
  var markdowntext = req.body.Text; 
  var convertedHTMLText = marked(markdowntext);
    console.log('converted html', convertedHTMLText);
  res.send(convertedHTMLText);
});

module.exports = router;