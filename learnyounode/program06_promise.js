var myModule = require('./mymodule');
var dir = process.argv[2];
var filterStr = process.argv[3];

var es6denodeify = require('./es6denodeify');
var myModule = es6denodeify(myModule);


myModule(dir, filterStr).then((list) => {  
  list.forEach((file) => {
    console.log(file);
  });
});
