var React = require('react');

var Help = (props) => {
    return (
        <div>
            <h1>Help</h1>
            <h2>Matched betting lay stake calculator</h2>
            <p className="help-text">Given the back/lay odds and stakes the calculator calculates your profit for either outcome (ie. the back bet wins or the lay bet wins).
            Provided with valid data, the calculator displays a table to show a detailed profit breakdown.</p>
            <p className="help-text">If the <i>calculate</i> checkbox is ticked, it also calculates the lay bet to achieve the same profit in both cases. (Unticking and manually setting the lay bet can be used for underlaying/overlaying.)</p>
            <h2>Bet types</h2>
            <h3>Qualifying/Arbing mode</h3>
            <p className="help-text">Here you bet with your own money, so no money is given to you by the bookie. In most cases this is how you qualify for the bonus.
            Usually you have a small loss here but then you receive your bonus to make profit.<br/>
            Another use case for normal mode is arbing (arbitrage betting), ie. finding a combination of odds to generate guaranteed profit regardless of the outcome of an event.</p>
            <h3>Stake Not Returned (SNR) mode</h3>
            <p className="help-text">SNR bonus is free money given by the bookmaker when only the free bet winnings are returned to you if your free bet wins, excluding the actual free bet stake.
            For example if you placed a £10 SNR free bet at odds of 3.00, you would make (£10 x 3.00 = £30) - £10 Free Bet Stake = £20 </p>
            <h3>Stake Returned (SR) mode</h3>
            <p className="help-text">When you bet with a stake returned free bet, both the free bet stake (the free bet amount) and the winnings from the bet are returned to you if your free bet wins.
            For example if you placed a £10 SR free bet at odds of 3.00, you would make £10 x 3.00 = £30<br/>
            This might look better than SNR bonuses but more often than not the free bet has wagering requirements, so there is a minimum amount you have to play before you can cash out the bonus.<br/>
            For example, if you have £100 bonus with 5x requirements, you will need to stake a total of £500 for any of your bonus winnings to be able to withdraw.</p>
            <h3>Risk Free Bet</h3>
            <p className="help-text">Here if your first bet with the bookmaker loses, the bookie will refund your stake, if your first bet wins, you can keep your winnings.<br/>
            In this mode the calculator has two additional fields in the back bet column. Free Bet Award is the free bet amount (often equal to your back bet but not in every bookmaker offer).
            As the refunded free bet cannot be withdrawn right away, you have to back another bet with it, Free Bet Return is the percentage of the free bet you hope to keep after playing it through.
            Depending on the odds this could be somewhere between 70-90%. The calculator defaults to 80%.</p>
            <h2>Commission</h2>
            <p className="help-text">Often you lay your bets in a betting exchange, rather than a bookmaker. While bookmakers generate revenue by offering less efficient odds,
            betting exchanges normally generate revenue by charging a commission which is calculated as a percentage of net winnings for each customer on each event, ie. they keep a portion of your winnings.
            For example, the commission on Betfair is 5%, on Smarkets it's 2%.<br/>
            Always make sure the correct commission fee is given in the lay bet column as the results may be vastly different.</p>
            <h2>The Lay Bet stake</h2>
            <p className="help-text">By default your goal is to determine the lay bet stake amount to achieve the same outcome despite the outcome of the bet. When the calculate checkbox is ticked,
            the lay bet is calculated based on the back and lay odds and the back bet stake. Sometimes however, you might want to under or overlay your bet - then simply untick the checkbox and you can
            set the lay bet stake manually, the liability and the profit breakdown will show the correct numbers.</p>
        </div>
    );
}

module.exports = Help;