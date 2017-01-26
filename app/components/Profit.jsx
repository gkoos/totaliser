var React = require('react');
var calc = require('calc');

var Profit = (props) => {
    var sum = calc.round2(props.sum);
    var sign = sum < 0 ? '-' : '+';
    var className = sum < 0 ? 'lose' : 'win';
    sum = Math.abs(sum);

    return (
        <span className={className}>{sign} £{sum}</span>
    );
}

module.exports = Profit;