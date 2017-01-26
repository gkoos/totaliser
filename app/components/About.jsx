var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1>About MBCalc</h1>
            <p>Matched betting lay stake calculator</p>
            <p className="version">{VERSION}</p>
            <p><i className="fa fa-copyright" aria-hidden="true"></i> 2017</p>
            <p><a href="https://github.com/gkoos/mbcalc" target="github">https://github.com/gkoos/mbcalc</a></p>
        </div>
    );
}

module.exports = About;