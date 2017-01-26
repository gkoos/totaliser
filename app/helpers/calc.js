module.exports = {
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    round2: function (num) {
        return this.isNumber(num) ? (Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2)) : NaN;
    }
}