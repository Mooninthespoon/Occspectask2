const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomName : {
        type: String,
        required: true,
        unique: false,
    },

    roomPrice : {
        type: String,
        required: true,
        unique: false,
    },
    
    roomDescription : {
        type: String,
        required: true,
        unique: false,
    }
})

const Room = mongoose.model('Room',roomSchema);

module.exports = Room;