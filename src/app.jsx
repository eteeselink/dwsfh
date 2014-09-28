
require("normalize.css/normalize.css");
require("./global.styl");
require("./typography.styl");

var View = require("./view/view");

window.view = React.renderComponent(<View/>,
  document.getElementById('hello')
);

