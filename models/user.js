const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => new mongoose.Types.ObjectId(),
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [1, "Age must be greater than 0"],
    },
});

module.exports = mongoose.model("User", userSchema);
