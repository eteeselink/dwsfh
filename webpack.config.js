var path = require('path');
var webpack = require('webpack');
var strict_loader = __dirname + "/dev/strict-loader.js";
var stylus_preimport_loader = __dirname + "/dev/stylus-preimport-loader.js";

function asRegExp(string){
    return new RegExp(string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1"));
}

var production = process.argv.indexOf("-p") !== -1;

// make React available in each module
var globalRequires = {
  React: "react",
  precondition: "util/precondition"
};

var config = {
  cache: true,
  entry: './src/app.jsx',

  output: {
    filename: "app-bundle.js",
    path: __dirname + "/src"
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: strict_loader + "!jshint-loader!jsx-loader?harmony&insertPragma=React.DOM"},
      { test: /\.css$/, loader:  "style-loader!css-loader"},
      //{ test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader?import=" + __dirname + "/src/lib.styl"}
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader!" + stylus_preimport_loader}
    ],

    noParse: production ? [
      /moment/  // we never want to parse moment.js, because then webpack's fancy require context code kicks in and includes all locales.
    ] : [
      /Immutable.js/,
      /moment/
    ],
  },


  plugins: [
    new webpack.ProvidePlugin(globalRequires),

    // hack to avoid displaying the React Devtools warning
    new webpack.DefinePlugin({
      'console.debug': function(text){
        if (text.indexOf('Download the React DevTools') !== 0)
          console.debug(text);
      }
    }),

    new webpack.PrefetchPlugin(globalRequires.React)
  ],

  resolveLoader: { 
    // add node_modules to module PATH so that e.g. require("jsx-loader") loads from node_modules/react
    root: path.join(__dirname, "node_modules") 
  },

  resolve: {
    // allow require('file') instead of require('file.jsx')
    extensions: ['', '.jsx', '.js', '.json'] ,
    root: [
      __dirname + "/src",
      __dirname + "/src/view"    // add view to root for shorter require()s across JSX components
    ]
  },

  // load stylus libraries
  stylus: {
    use: [
      require('jeet')(),
      require('nib')(),
      require('rupture')()
    ]
  },

  jshint: {
    camelcase: false,  // would turn it on, but it's badly implemented. I.e. it disallows $__0 (generated non-alnum stuff) but allows BlaBla (pascal casing)
    eqeqeq: true,      // disallow == and !=; only === and !===
    indent: 4,         // 4 spaces per indent, always
    latedef: "nofunc", // don't refer to late defined variables (except functions)
    noarg: true,       // no arguments.caller/callee
    undef: true,       // check undefined variable references
    unused: true,      // check unused variables
    
    // predefine browser globals (document, window, etc)
    browser: true, 

    // predefine stuff that webpack.ProvidePluging require()s for every file
    predef: Object.keys(globalRequires).concat(['console', 'DEBUG']),   

    // jshint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: true,

    // jshint to not interrupt the compilation
    // if you want any file with jshint errors to fail
    // set failOnHint to true
    failOnHint: false,
  },
};

// for production builds, replace `process.env.NODE_ENV` to "production"
// so that React will get properly minified.
if(production) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            },
        })
    );
}

module.exports = config;
