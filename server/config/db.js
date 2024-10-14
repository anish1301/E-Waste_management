const mongoose = require ('mongoose')
const connect = () => {
    return mongoose.connect('mongodb+srv://anishkumar130119:tcmec2vfkr2YCz6B@cluster0.pojxz.mongodb.net/')
}
module.exports = connect;