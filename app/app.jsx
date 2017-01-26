var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('Main');
var Calculator = require('Calculator');
var Help = require('Help');
var About = require('About');

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="help" component={Help}/>
            <IndexRoute component={Calculator}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
