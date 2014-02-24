var fs = require("fs")
  , tokenizer = require("../")

function logToken (src, token) {
  console.log(token.type + ' => ' + JSON.stringify(src));
}

fs.createReadStream(__dirname + "/../index.js", {encoding: "utf-8"}).pipe(tokenizer(logToken))
fs.createReadStream(__dirname + "/fixtures/hello.js", {encoding: "utf-8"}).pipe(tokenizer(logToken))