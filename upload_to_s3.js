var fs = require('fs');
var AWS = require('aws-sdk');
var s3 = new AWS.S3({
  params: { Bucket: 'demo-aws2016' }
});

fs.readdir('bucket-s3-files', function(err, files) {
  files.forEach(function(file) {

    fs.readFile('bucket-s3-files' + file, 'utf-8', function(err, content) {
      var params = {
        Bucket: 'demo-aws2016',
        Key: file,
        Body: content
      };
      s3.putObject(params, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully uploaded file: " + file);
        }
      });

    });
  });
});
