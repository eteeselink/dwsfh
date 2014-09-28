// prepend "use strict" to a module without changing line numbers
module.exports = function(source) {
  return "\"use strict\";  " + source;
}