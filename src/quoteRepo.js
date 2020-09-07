const fs = require('fs');

module.exports = {
    readQuoteRepo: function () {
        const rawData = fs.readFileSync("quoteRepository.json");
        return rawData
    },
    readContextQuotes: function () {
        const rawData = this.readQuoteRepo()
        const contextQuotes = JSON.parse(rawData).contextualQuotes;
        return contextQuotes;
    },
    readQuotes: function () {
        const rawData = this.readQuoteRepo()
        const quotes = JSON.parse(rawData).quotes;
        return quotes;
    }
}


