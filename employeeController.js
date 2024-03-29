const Employee = require('../models/employeeModel')
const {model} = require("mongoose");

// Employee들의 모든 list를 보여줌
const showAll = function (req, res, next){
    Employee.find()
        .then(function (response){
            res.json({
                response
            })
        })
        .catch(function (error){
            res.json({
                message : 'showAll 에러 발생'
            })
        })
}

// 특정 document(SQL에서의 row를 보여줌)
const show = function (req, res, next){
    const employeeID = req.body._id
    Employee.findById(employeeID)
        .then(function (response){
            res.json({
                response
            })
        })
        .catch(function (error){
            res.json({
                message : 'show 에러 발생'
            })
        })
}

// Employee 데이터 INSERT
const insert = function (req, res, next){
    const data = new Employee({
        name : req.body.name,
        age : req.body.age,
        phone : req.body.phone
    })
    data.save()
        .then(function (response){
            res.json({
                message : '데이터 삽입 성공'
            })
        })
        .catch(function (error){
            res.json({
                message : 'insert 에러 발생'
            })
        })
}

const update = function (req, res, next){
    const employeeID = req.body._id;
    const updateData = {
        name : req.body.name,
        age : req.body.age,
        phone : req.body.phone
    }
    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
        .then(function (){
            res.json({
                message: 'Employee 갱신(update) 성공'
            })
        })
        .catch(function (error){
            res.json({
                message: 'Employee 갱신(update) 에러'
            })
        })
}

const destory = function (req, res, next){
    const employeeID = req.body._id

    Employee.findByIdAndRemove(employeeID)
        .then(function (){
            res.json({
                message: 'Employee 삭제(delete) 성공'
            })
        })
        .catch(function (error){
            res.json({
                message: 'Employee 삭제(delete) 에러'
            })
        })
}


module.exports = {
    showAll, show, insert, update, destory
}