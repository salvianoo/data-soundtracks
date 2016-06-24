var fs   = require('fs');
var uuid = require('uuid');
var lineReader = require('readline').createInterface({
  input: fs.createReadStream('soundtracks_raw.list')
});

// create a dir
fs.exists('buckect-s3-files', function(exists) {
  fs.mkdir('bucket-s3-files', function(err) {
    console.log(err);
  });
});

var dirName = 'bucket-s3-files';

movie_title_re = /^#\s".+"/;

lineReader.on('line', function(line) {
  if ( movie_title_re.test(line) ) {
    var foobar = line.match(movie_title_re);
    var movie_title = foobar[0].replace('#', '');
    var content = JSON.stringify({
      title: movie_title
    });
    var filename = uuid.v4();
    fs.writeFile(dirName + '/' + filename + '.json', content, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log(filename);  
      }
    });
  }
});
