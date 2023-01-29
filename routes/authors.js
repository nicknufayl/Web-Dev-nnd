const express = require('express')
const { trusted } = require('mongoose')
const router = express.Router()

// All Authors Route
router.get('/', (req, res) => {
    res.render('index')
})

// New Author Route
route.get('/new', (req, res) => {
    res.render('authors/new')
})

// Create Author Route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router