class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.mid=Math.floor((this.min + this.max)/2)
        if (this.max - this.min <= 1)
        {
            return this.max
        }
        return this.mid
    }

    lower() {
        this.max = this.mid
    }

    greater() {
        this.min = this.mid + 1

    }
}

module.exports = GuessingGame;
