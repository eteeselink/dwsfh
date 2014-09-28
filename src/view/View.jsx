require("./View.styl");


var View = React.createClass({
    getInitialState() {
        return { slot };
    },

    render() {
        return <div className="View">
            Hello!
        </div>;
    }
});

module.exports = View;
