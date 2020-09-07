const quoteRepo = require('../quoteRepo')

module.exports = {
    name: "contextQuoteHandler",
    description: "asdfasdf",
    execute(message, args) {
        const contextQuotes = quoteRepo.readContextQuotes()
        if (contextQuotes[args]) {
            message.channel.send(contextQuotes[args])
            return true;
        }
        return false;
    }
}
