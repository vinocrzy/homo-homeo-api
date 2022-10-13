module.exports = {
    routes: [
        { // Path defined with an URL parameter
            method: 'GET',
            path: '/getme',
            handler: 'patient.me',
        },

    ]
}