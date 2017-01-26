var React = require('react');

var Help = (props) => {
    return (
        <div>
            <h1>Help</h1>
            <h2>Matched betting lay stake calculator</h2>
            <p className="help-text">Given the back/lay odds and stakes the calculator calculates your profit for either outcome (ie. the back bet wins or the lay bet wins).
            Provided with valid data, the calculator displays a table to show a detailed profit breakdown.</p>
            <p className="help-text">If the <i>calculate</i> checkbox is ticked, it also calculates the lay bet to achieve the same profit in both cases.</p>
        </div>
    );
}

module.exports = Help;