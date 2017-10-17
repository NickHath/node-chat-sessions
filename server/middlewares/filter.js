const sevenDirtyWords = require('../../sevenDirtyWords');
const censorChars = ['@', '#', '*', '$', '!'];
module.exports = function filter(req, res, next) {
  while ( sevenDirtyWords.find( word => req.body.text.includes(word) ) ) {
    const badWord = sevenDirtyWords.find( word => req.body.text.includes(word) );
    req.body.text = req.body.text.replace( badWord, censorChars[Math.floor(Math.random() * censorChars.length)].repeat( badWord.length ) );
  }
  next();
}