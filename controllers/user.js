const verify = require('../helpers/googleAuth')

class UserController {
    static googleSignIn(req,res,next) {
        let googledata = req.body.data.id_token
        verify(googledata)
        .then(payload=>{
            let toSend = {
                name: payload.name,
                email: payload.email,
                picture: payload.picture
            }
            res.send(toSend)
        })
        .catch(next)
    }
}

module.exports = UserController