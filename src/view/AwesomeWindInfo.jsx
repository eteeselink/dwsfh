require("./AwesomeWindInfo.styl");
var Model = require("model/Model");


var AwesomeWindInfo = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather)
    },



    render() {
        if(!this.props.data.hasData()) {
            return <div className="AwesomeWindInfo">Loading!</div>;
        }   
        var width = Math.round(this.props.data.wind.speed*30);

        var style = {
            width: "100%",
            transform: "rotate("+this.props.data.wind.deg+"deg)",
            transformOrigin: "center center"
        };

        return (
            <div className="AwesomeWindInfo">
            <h2>Awesome wind in {this.props.data.name}</h2>
                <div className="container">
                    <div style={style}>
                    <img
                        width={width}px
                        src="http://transom.org/wp/wp-content/uploads/2012/07/straight-arrow-marquee.gif?9d7bd4" />
                    </div>
                </div>    
            </div>
        );
    }
});

module.exports = AwesomeWindInfo;
