class GuessingGame {
    constructor() {
        this.first = null;
        this.last = null;
    }

    setRange(min, max) {
        this.first = min;
        this.last = max;
        return this;
    }

    guess() {
        return Math.round((this.first + this.last) / 2);
    }

    greater() {
        this.first = this.guess();
        return this;
    }

    lower() {
        this.last = this.guess();
        return this;
    }
}

module.exports = GuessingGame;
