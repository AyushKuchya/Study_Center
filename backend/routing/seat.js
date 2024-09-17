const express = require('express');
const routing = express.Router();
const seatModel = require('../handlers/controller.js')

routing.get('/seatinformation',seatModel.getSeat)
routing.post('/userdetails',seatModel.postUserDetails)
routing.post('/addseat',seatModel.addSeat)
routing.get('/activeusers',seatModel.getActiveUsers)
routing.get('/inactiveusers',seatModel.getInactiveUsers)

module.exports = routing