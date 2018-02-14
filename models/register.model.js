let mongoose = require("mongoose");
var bcrypt = require('bcrypt');
let Schema = mongoose.Schema;

var RegisterSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    cpassword: { type: String, required: true, unique: true }

});

RegisterSchema.statics.authenticate = function(email, password, callback) {
    RegisterModel.findOne({ email: email })
        .exec(function(err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function(err, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });
}

RegisterSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

var RegisterModel = mongoose.model('registers', RegisterSchema);
module.exports = RegisterModel