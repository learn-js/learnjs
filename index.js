var lazy = require('lazy');
var fs = require('fs');

var readme = __dirname + '/readme.md';
var book = __dirname + '/manuscript/';
var exclude = ['frontmatter:', 'mainmatter:', 'backmatter:'];

fs.unlink(readme, build);

function build(){
  fs.readFile(__dirname + '/preface.md', function(err, data){
    fs.writeFile(readme, data);
  })

  lazy(fs.createReadStream(book + 'Book.txt'))
    .lines
    .forEach(function(line){
      includeChapter(line);
    }
  );
}

function contains(arr, data){
  var str = data.toString();
  if (str != 0 && arr.indexOf(str) === -1){
    return true;
  }
}

function includeChapter(line){
  if ( contains(exclude, line) ){
    fs.readFile(book + line, function(err, data){
      data = '\n\n\n' + data.toString().replace(/~~~~~~~~/gi, '```');

      fs.appendFile(readme, data, function(err){
        if (err){ throw err; }
      })
    })
  }
}