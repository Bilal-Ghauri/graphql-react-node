const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ['admin', 'member'], // The allowed values
        default: 'member',         // Default value if none is provided
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Skip if password is not modified
    try {
        const salt = await bcrypt.genSalt(10); // Generate salt
        this.password = await bcrypt.hash(this.password, salt); // Hash the password
        next();
    } catch (error) {
        next(error);
    }
});

// Compare plain text password with hashed password
userSchema.methods.comparePassword = async function (plainPassword) {
    return bcrypt.compare(plainPassword, this.password);
};

const User = mongoose.model('User', userSchema)

module.exports = User;