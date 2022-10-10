const mongoose = require("mongoose")
const { Schema } = mongoose

const gameSchema = new Schema({
    game:{
      type: String,
      required: true
      },
      estimativeGame:{
        type: Number,
        required: true
        },
      statistics: {
        type: Array,
        required: true

      }
         
},
    {
        timestamps: true
    }
)

const Game = mongoose.model("Game", gameSchema)

module.exports =  Game