var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var Nav = React.createClass({
    render: function () {
        return (
            <div className="pure-menu pure-menu-horizontal">
                <span className="pure-menu-heading">MATCHED BETTING</span>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                        <IndexLink to="/" className="pure-menu-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                            <i className="fa fa-calculator"/> Calculator
                        </IndexLink>
                    </li>
                    <li className="pure-menu-item">
                        <Link to="/help" className="pure-menu-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                            <i className="fa fa-question-circle"/> Help
                        </Link>
                    </li>
                    <li className="pure-menu-item">
                        <Link to="/about" className="pure-menu-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                            <i className="fa fa-info-circle"/> About
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Nav;