const jwt = require('jsonwebtoken');
//setting secret and expiration time
const secret = 'superdupersecret';
const expiration = '12h';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, {expiresIn: expiration });
    }
};