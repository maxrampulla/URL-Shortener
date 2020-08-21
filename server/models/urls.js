const mongoose = require('mongoose');

const Url = mongoose.model('Url', {
    directedLink: {type: String},
    shortenedLinkCode: {type: String},
    createdAt: {type: Date, default: Date.now}
}, 'urls');


module.exports = { Url };