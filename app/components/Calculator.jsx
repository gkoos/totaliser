var React = require('react');

var calc = require('calc');

var ProfitBreakdown = require('ProfitBreakdown');

var Calculator = React.createClass({
    getInitialState: function() {
        return {
            type: 'Qualifying Bet',
            data: {
                b1: '', o1: '', f: '', r: 80, b2: '', o2: '', c: 5
            },
            liability: 0,
            calculate: true,
            breakdown: {backWins: {}, layWins: {}}
        }
    },

    calculate() {
        var type = this.state.type;
        var calculate = this.state.calculate;

        var b1 = this.state.data.b1;
        var o1 = this.state.data.o1;
        var f = this.state.data.f;
        var r = this.state.data.r;

        var b2 = this.state.data.b2;
        var o2 = this.state.data.o2;
        var c = this.state.data.c;

        var liability = (b2 && o2) ? b2 * (o2 - 1) : 0;

        this.setState({
            liability: liability
        });

        switch (type) {
            case 'Qualifying Bet':
                if (b1 && o1 && o2) {
                    if (calculate) {
                        b2 = calc.round2(b1 * o1 / (o2 - c / 100));
                    }
                    liability = calc.round2(b2 * (o2 - 1));
                    var data = this.state.data;
                    data.b2 = b2;

                    var breakdown = {
                        backWins: {back: b1 * (o1 - 1), lay: -b2 * (o2 - 1)},
                        layWins: {back: -b1, lay: b2 * (1 - c / 100)}
                    };

                    this.setState({
                        data: data,
                        liability: liability,
                        breakdown: breakdown
                    });
                }
                break;
            case 'SNR Bet':
                if (b1 && o1 && o2) {
                    if (calculate) {
                        b2 = calc.round2(b1 * (o1 - 1) / (o2 - c / 100));
                    }
                    liability = calc.round2(b2 * (o2 - 1));
                    var data = this.state.data;
                    data.b2 = b2;

                    var breakdown = {
                        backWins: {back: b1 * (o1 - 1), lay: -b2 * (o2 - 1)},
                        layWins: {back: 0, lay: b2 * (1 - c / 100)}
                    };

                    this.setState({
                        data: data,
                        liability: liability,
                        breakdown: breakdown
                    });
                }
                break;
            case 'SR Bet':
                if (b1 && o1 && o2) {
                    if (calculate) {
                        b2 = calc.round2(b1 * o1 / (o2 - c / 100));
                    }
                    liability = calc.round2(b2 * (o2 - 1));
                    var data = this.state.data;
                    data.b2 = b2;

                    var breakdown = {
                        backWins: {back: b1 * o1, lay: -b2 * (o2 - 1)},
                        layWins: {back: 0, lay: b2 * (1 - c / 100)}
                    };

                    this.setState({
                        data: data,
                        liability: liability,
                        breakdown: breakdown
                    });
                }
                break;
            case 'Risk Free Bet':
                if (b1 && o1 && o2) {
                    if (calculate) {
                        b2 = calc.round2((b1 * o1 - f * r / 100) / (o2 - c / 100));
                    }
                    liability = calc.round2(b2 * (o2 - 1));
                    var data = this.state.data;
                    data.b2 = b2;

                    var breakdown = {
                        backWins: {back: b1 * (o1 - 1), lay: -b2 * (o2 - 1)},
                        layWins: {back: -b1 + f * r / 100, lay: b2 * (1 - c / 100)}
                    };

                    this.setState({
                        data: data,
                        liability: liability,
                        breakdown: breakdown
                    });
                }
                break;
        }
    },

    handleTypeChange: function(e) {
        var type = this.refs.type.value;
        this.setState({
            type: type
        }, this.calculate);
    },

    handleChangeCalculate: function(e) {
        var calculate = document.getElementById('calculate').checked;
        this.setState({
            calculate: calculate
        }, function () {
            if (calculate) {
                this.calculate();
            }
        });
    },

    handleChange: function(e) {
        var id = e.target.id;
        var value = e.target.value;

        var data = this.state.data;
        data[id] = value;

        this.setState({
            data: data
        }, this.calculate);
    },

    handleBlur: function(e) {
        this.calculate();
    },

    render: function () {
        var type = this.state.type;
        var data = this.state.data;
        var liability = this.state.liability;
        var calculate = this.state.calculate;
        var breakdown = this.state.breakdown;

        return (
            <div>
                <form className="pure-form">
                    <label htmlFor="type">Bet Type: </label>
                    <select id="type" ref="type" value={type} onChange={this.handleTypeChange}>
                        <option>Qualifying Bet</option>
                        <option>SNR Bet</option>
                        <option>SR Bet</option>
                        <option>Risk Free Bet</option>
                    </select>
                    <div className="pure-g form-body">
                        <div className="pure-u-1 pure-u-md-1-2">
                            <div className="form-column">
                                <h3>Back Bet</h3>
                                <div className="form-line">
                                    <label htmlFor="b1">Bet: £</label>
                                    <input id="b1" ref="b1" className="small-input" type="text" value={data.b1} onBlur={this.handleBlur} onChange={this.handleChange}/>
                                </div>
                                <div className="form-line">
                                    <label htmlFor="o1">Odds: </label>
                                    <input id="o1" ref="o1" className="smaller-input" type="text" value={data.o1} onBlur={this.handleBlur} onChange={this.handleChange}/>
                                </div>
                                <div className = {type!='Risk Free Bet' ? 'hidden' : ''}>
                                    <div className="form-line">
                                        <label htmlFor="f">Free Bet Award: </label>
                                        <input id="f" ref="f" className="small-input" type="text" value={data.f} onBlur={this.handleBlur} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-line">
                                        <label htmlFor="f">Free Bet Ret.: %</label>
                                        <input id="r" ref="r" className="smaller-input" type="text" value={data.r} onBlur={this.handleBlur} onChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2">
                            <div className="form-column">
                                <h3>Lay Bet</h3>
                                <div className="form-line">
                                    <label htmlFor="b2">Bet: £</label>
                                    <input disabled={calculate} id="b2" ref="b2" className="small-input" type="text" value={data.b2} onBlur={this.handleBlur} onChange={this.handleChange}/>
                                    <label className="non-wrappable">
                                        <input ref="calculate" id="calculate" type="checkbox" checked={calculate} onChange={this.handleChangeCalculate}/>Calculate
                                    </label>
                                </div>
                                <div className="form-line">
                                    <label htmlFor="o2">Odds: </label>
                                    <input id="o2" ref="o2" className="smaller-input" type="text" value={data.o2} onBlur={this.handleBlur} onChange={this.handleChange}/>
                                </div>
                                <div className="form-line">
                                    <label htmlFor="c">Commission: %</label>
                                    <input id="c" ref="c" className="smaller-input" type="text" value={data.c} onBlur={this.handleBlur} onChange={this.handleChange}/>
                                </div>
                                <div className="form-line">
                                    <label>Liability: </label>
                                    <span id="l">{liability ? ('£' + liability) : ''}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <ProfitBreakdown breakdown={breakdown}/>
            </div>
        );
    }
});

module.exports = Calculator;