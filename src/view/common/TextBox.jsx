var TextBox = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func,
        defaultValue: React.PropTypes.string
    },

    onSubmit() {
        var value = this.refs.textBox.getDOMNode().value;
        this.props.onChange(value);
        return false;
    },

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input ref="textBox" defaultValue={this.props.defaultValue}/>
            </form>
        );
    }
});

module.exports = TextBox;
