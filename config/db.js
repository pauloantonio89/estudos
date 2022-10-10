const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const env = require('../.env')

const conn = async ()=>{
    try {
        const dbconn = await mongoose.connect(env.dbString)    
        console.log("Conectou ao Banco")
        return dbconn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn