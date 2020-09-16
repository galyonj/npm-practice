const bcrypt = require('bcrypt');
const colors = require('colors');
const saltRounds = 10;
const myPlaintextPassword = "password";

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash.rainbow)
    });
});