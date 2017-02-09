var React = require('react');
var Profit = require('Profit');
var Rate = require('Rate');
var calc = require('calc');

var ProfitBreakdown = React.createClass({
    renderFreeBet: function() {
        return (
            <span><Profit sum={this.props.breakdown.layWins.back}/> and <Profit sum={this.props.breakdown.layWins.free}/> worth of Free Bet</span>
        );
    },

    render: function() {
        var breakdown = this.props.breakdown;

        if (calc.isNumber(breakdown.backWins.back) && calc.isNumber(breakdown.backWins.lay) &&
            calc.isNumber(breakdown.layWins.back) && calc.isNumber(breakdown.layWins.lay)) {

            return (
                <table className="pure-table pure-table-horizontal profit-table">
                    <thead>
                    <tr>
                        <th colSpan={5}>
                            Rate: <Rate value={breakdown.rate}/><br/>
                            Profit Breakdown
                        </th>
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
                        <td>{isNaN(breakdown.layWins.free) ? <Profit sum={breakdown.layWins.back}/> : this.renderFreeBet()}</td>
                        <td><Profit sum={breakdown.layWins.lay}/></td>
                        <td>=</td>
                        <td><Profit sum={breakdown.layWins.back + breakdown.layWins.lay + (breakdown.layWins.free || 0)}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            );
        }
        else {
            return null;
        }
    }
});

module.exports = ProfitBreakdown;