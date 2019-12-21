const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    ip: String,
    request: Object,
    method: String,
    response: Object,
    status: Number,
    time: String,
    headers: String,
    originalUrl: String
}
)

module.exports = mongoose.model('Log', logSchema)