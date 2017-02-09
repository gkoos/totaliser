var React = require('react');

var Rate = (props) => {
    var value = props.value;
    var className = '';
    
    if (value < 80) {
        className = 'lose'
    }
    else if (value > 100) {
        className = 'win';
    }
    
    return (
        <span className={className}>{value}</span>
    );
}

module.exports = Rate;