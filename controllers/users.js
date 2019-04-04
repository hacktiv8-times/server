const { User } = require('../models')
const { bcrypt, jwt } = require('../helpers')
const { OAuth2Client } = require('google-auth-library')
const CLIENT_ID = "394233952968-u2cmasf883te32foqnlt39h2ie625rm1.apps.googleusercontent.com"
const client = new OAuth2Client(CLIENT_ID)

class UserController {
    static googleLogin(req, res) {
        let payload = null
        client
            .verifyIdToken({
                idToken: req.body.token,
                audience: CLIENT_ID
            })
            .then(ticket => {
                payload = ticket.getPayload()

                return User
                    .findOne({
                        email: payload.email
                    })

            })
            .then(user => {
                if (!user) {
                    return User
                        .create({
                            name: payload.name,
                            email: payload.email,
                            password: '1Qazxc',
                            profilePicture: payload.picture
                        })
                } else {
                    return user
                }
            })
            .then(user => {
                let token = jwt.jwtSign({
                    id: user._id
                })
                res.status(200).json({
                    name: payload.name,
                    email: payload.email,
                    role: payload.role,
                    token: token
                })

            })
            .catch(err => {
                errors = {}

                if (err.errors.name) {
                    errors.title = err.errors.title.message
                }
                if (err.errors.email) {
                    errors.email = err.errors.email.message
                }
                if (err.errors.password) {
                    errors.password = err.errors.password.message
                }

                let keys = Object.keys(errors)
                if (keys.length !== 0) {
                    res.status(400).json(errors)
                } else {
                    res.status(500).json(err)
                }
            })
    }
}

module.exports = UserController