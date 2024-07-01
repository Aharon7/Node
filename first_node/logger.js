//let x =; // SyntaxError: Unexpected token ';'

//(function (exports, require, module, __filename, __dirname) {
  console.log(__filename);
  console.log(__dirname);
  //console.log(exports);
  //console.log(require);
 // console .log(module);


const url = 'http://mylogger.io/log';

function log(message) {
  // Send an HTTP request
  console.log(message);

}

module.exports = log;
//module.exports.endPoint = url;
exports.log = log;

//})