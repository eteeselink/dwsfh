// prepend `@import '~lib.styl'` before each loaded .styl file.
// this way, changes made in lib.styl trigger a recompile of all styles.
module.exports = function(source) {
  return "@import '" + __dirname + "/../src/lib.styl'; @import 'nib'; " + source;
}
