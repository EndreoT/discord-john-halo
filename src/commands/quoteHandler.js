const quoteRepo = require('../quoteRepo')

function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

module.exports = {
    name: "quoteHandler",
    description: "asdfasdf",
    execute(message, args) {
        const quotes = quoteRepo.readQuotes()
        const size = quotes.length
        const quote = quotes[getRandInteger(0, size - 1)]
        message.channel.send(quote)
    }
}
