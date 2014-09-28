require("./Button.styl");

var Button = React.createClass({
    render() {
        return this.transferPropsTo(
            <button className="Button">{this.props.children}</button>
        );
    }
});

module.exports = Button;
