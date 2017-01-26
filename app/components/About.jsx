var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1>About</h1>
            <h1><i className="fa fa-calculator" aria-hidden="true"></i> MBCalc Matched Betting Calculator</h1>
            <p className="version">Version {VERSION}</p>
            <p><i className="fa fa-copyright" aria-hidden="true"></i> 2017 by gkoos</p>
            <p><a href="https://github.com/gkoos/mbcalc" target="github">https://github.com/gkoos/mbcalc</a></p>
        </div>
    );
}

module.exports = About;