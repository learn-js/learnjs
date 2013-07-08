var lazy = require('lazy');
var fs = require('fs');

var readme = __dirname + '/readme.md';

fs.unlink(readme, build);

function build(){

  fs.readFile(__dirname + '/preface.md', function(err, data){
    fs.writeFile(readme, data);
  })

  var book = __dirname + '/manuscript/';

  var exclude = ['frontmatter:', 'mainmatter:', 'backmatter:'];

  lazy(fs.createReadStream(book + 'Book.txt'))
    .lines
    .forEach(function(line){
      if ( contains(exclude, line) ){
        console.log(line.toString())
        fs.readFile(book + line, function(err, data){
          data = data.toString().replace(/~~~~~~~~/gi, '```');
          fs.appendFile(readme, data, function(err){
            if (err){ throw err; }
          })
        })
      }
    }
  );

  function contains(arr, data){
    var str = data.toString();
    if (str != 0 && arr.indexOf(str) === -1){
      return true;
    }
  }

}