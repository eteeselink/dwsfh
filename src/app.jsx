
require("normalize.css/normalize.css");
require("./global.styl");
require("./typography.styl");

var View = require("./view/View");

var view = React.renderComponent(<View/>,
  document.getElementById('hello')
);

window.refreshView = function() {
    view.forceUpdate();
};
