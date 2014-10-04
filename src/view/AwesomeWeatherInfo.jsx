/*global google */
require("./AwesomeWeatherInfo.styl");
var Model = require("model/Model");

var GoogleLineChart = React.createClass({
    render: function(){
        return React.DOM.div({id: this.props.graphName, style: {height: "500px"}});
    },
    componentDidMount: function(){
        this.drawCharts();
    },
    componentDidUpdate: function(){
        console.log("didupdate");
        this.drawCharts();
    },
    drawCharts: function(){
        
        var data = google.visualization.arrayToDataTable(this.props.data);
        console.log(data);
        var options = {
            title: 'ABC',
        };

        var chart = new google.visualization.LineChart(
            document.getElementById(this.props.graphName)
        );
       
        chart.draw(data, options);
    }
});

var GooglePieChart = React.createClass({
    render: function(){
        return React.DOM.div({id: this.props.graphName, style: {height: "500px"}});
    },
    componentDidMount: function(){
        this.drawCharts();
    },
    componentDidUpdate: function(){
        console.log("didupdate");
        this.drawCharts();
    },
    drawCharts: function(){
        
        var data = google.visualization.arrayToDataTable(this.props.data);
        console.log(data);
        var options = {
            title: 'ABC',
        };

        var chart = new google.visualization.PieChart(
            document.getElementById(this.props.graphName)
        );
       
        chart.draw(data, options);
    }
});


var AwesomeWeatherInfo = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather)
    },

    render() {
        if(!this.props.data.hasData()) {
            return <div className="BoringWeatherInfo">Loading!</div>;
        }

        var iconUrl = "http://openweathermap.org/img/w/" + this.props.data.weather[0].icon + ".png";
        
        var data = [
                    ['Year', 'Sales', 'Expenses'],
                    ['2004',  1000,      400],
                    ['2005',  1170,      460],
                    ['2006',  660,       1120],
                    ['2007',  1030,      540]
                ];
            
        var piedata = [
          ['Event', 'Time of Day'],
          ['Sun up',     30],
          ['Sun down',     70]
          
        ];

        return (
            <div className="BoringWeatherInfo">
                <p>Piechart</p>
                <GooglePieChart graphName="pie" data={piedata}/>
                <p>Linechart</p>
                <GoogleLineChart graphName="awesome" data={data}/>

                <h2>Weather in {this.props.data.name}</h2>
                <img className="icon" src={iconUrl}/>
                <p>{this.props.data.weather[0].description}!</p>
            </div>
        );
    }
});

module.exports = AwesomeWeatherInfo;


