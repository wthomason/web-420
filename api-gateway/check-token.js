/*
============================================
; Title:  Check token
; File Name: check-token.js
; Author: William Thomason
; Date:   21 June 2019
; Description: check-token.js file
;===========================================
*/

var jwt = require('jsonwebtoken');
var config = require('./config');

/*
 * Check the HTTP header for a valid JSON web token
 * @param req
 * @param res
 * @param next
 */

function checkToken(req, res, next){

    var token = req.headers['x-access-token'];

    if(!token)
        return res.status(403).send({ auth: false, message: 'No token provided.'});

    jwt.verify(token, config.web.secret, function (err, decoded){
        if(err) return res.status(500).send({ auth: false, message: 'failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
}

module.exports = checkToken;