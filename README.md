# MBCalc Matched Betting Calculator

Simple matched betting calculator to display a detailed profit breakdown and calculate the lay stake for the same profit regardless the outcome. Created with React.js.

## Matched betting in a nutshell

According to [Wikipedia](https://en.wikipedia.org/wiki/Matched_betting), matched betting is
> a betting technique used by individuals to profit from the free bets and incentives offered by bookmakers. It is generally considered risk-free as it is based on the application of a mathematical equation rather than chance.

In it's simplest form you back an event at a bookmaker and lay the same event at a betting exchange or (another) bookmaker. When done properly, assuming you back bet with bonus 'free' money at the bookmaker, you can extract 70-80% of the bonus, converting it to real, withdrawable money.
To make the process risk-free and eliminate gambling it is essential the your bet gain the same profit either if the back bet wins or loses (in which case the lay bet wins). This calculator helps you calculate the stake you should lay to have equal profit regardless the outcome and determines the liability and also displays a detailed breakdown of your profit in each case. Laying a stake different from the calculated one (unclicking the *calculate* checkbox can be helpful with advanced concepts like underlaying/overlaying.

## Demo

The app is deployed to Heroku. The url is http://desolate-mountain-19653.herokuapp.com/

## Setting up development environment

1. Clone the github repository
2. Install `node.js` and `npm`
3. Run 
`$ npm install`
4. To start the dev server 
`$ node server.js`
5. start Webpack
`$ webpack -w`
6. navigate your browser to http://localhost:3000

## Dependencies

The application was created with React.js version 15.4.2, react-dom and react-router are also used.
For the responsive layout [Pure Css](http://purecss.io), a css-only framework was used, it's SASS-empowered version can be found at [https://github.com/rubysamurai/purecss-sass](https://github.com/rubysamurai/purecss-sass). Some [FontAwesome](http://fontawesome.io/) icons also pop up in the app.
For further information see the [package.json](package.json) file.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

## Feedback

Every feedback is highly appreciated. If you find flaws, errors, bugs or just have ideas how to improve the tool, feel free to drop a line.
