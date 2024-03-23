const express=require('express')
const login = require('../Controller/Login')
const sinup = require('../Controller/Sinup')
const getallstudents = require('../Controller/Getallstudents')
const updatestudents = require('../Controller/Editstudents')
// const deletestudents = require('../Controller/Deletestidents')
const Createstudents = require('../Controller/Createstudents')
const deletedata = require('../Controller/Deletestidents')
 const router=express.Router()
 router.route('/login').post(login)
router.route('/sinup').post(sinup)
router.route('/getallstudents').get(getallstudents)
router.route('/editstudent/:id').put(updatestudents)
router.route('/deletestudent/:id').delete(deletedata);
router.route('/addstudent').post(Createstudents)

 module.exports=router