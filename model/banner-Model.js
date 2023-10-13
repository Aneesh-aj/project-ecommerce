const mongoose = require("mongoose")
const bannerSchema = mongoose.Schema({
    banner:{type:String}
})

module.exports = mongoose.model("banners",bannerSchema)