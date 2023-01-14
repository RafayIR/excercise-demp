const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        validate(value) {
            if (value.length === 0) throw new Error("This is required field");
        }
    },
    activityType: {
        type: String,
        enum: ['Run', 'Bicycle Ride', 'Swim', 'Walk', 'Hike'],
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        requried: true,
    }

})

// Todo All valdiation in Schema

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;