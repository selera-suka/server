const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

async function verify(googledata) {
    const ticket = await client.verifyIdToken({
        idToken: googledata,
        audience: process.env.CLIENT_ID
    })
    const payload = ticket.getPayload()
    return payload
}

module.exports = verify