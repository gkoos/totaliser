var React = require('react');
var Profit = require('Profit');
var calc = require('calc');

var ProfitBreakdown = (props) => {
    var breakdown = props.breakdown;
    
    if (calc.isNumber(breakdown.backWins.back) && calc.isNumber(breakdown.backWins.lay) &&
        calc.isNumber(breakdown.layWins.back) && calc.isNumber(breakdown.layWins.lay)) {
        return (
            <table className="pure-table pure-table-horizontal profit-table">
                <thead>
                <tr>
                    <th colSpan={5}>Profit Breakdown</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td></td>
                    <td>Back</td>
                    <td>Lay</td>
                    <td></td>
                    <td>Total</td>
                </tr>

                <tr>
                    <td>If Back Bet wins</td>
                    <td><Profit sum={breakdown.backWins.back}/></td>
                    <td><Profit sum={breakdown.backWins.lay}/></td>
                    <td>=</td>
                    <td><Profit sum={breakdown.backWins.back + breakdown.backWins.lay}/></td>
                </tr>

                <tr>
                    <td>If Lay Bet wins</td>
                    <td><Profit sum={breakdown.layWins.back}/></td>
                    <td><Profit sum={breakdown.layWins.lay}/></td>
                    <td>=</td>
                    <td><Profit sum={breakdown.layWins.back + breakdown.layWins.lay}/></td>
                </tr>
                </tbody>
            </table>
        );
    }
    else {
        return null;
    }
}

module.exports = ProfitBreakdown;