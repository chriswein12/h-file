const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.{1,}@(.{1,}[^@])\.\w{2,3}/g, 'Please Enter Valid Email Address'],
        },
        password: {
            type: String,
            required: true,
            minlength: 4
        },

        savedHomes: [{
            type: Schema.Types.ObjectId,
            ref: "Home"
        }]
    }
);

//hash password for user
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

//method used to validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;