
const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/Celebrity.model')

router.get('', (req, res) => {
    Celebrity
        .find()
        .then(celebritiesData => {
            res.render('celebrities/celebrities', { celebritiesData })
        })
        .catch(err => console.log(err))
})

router.get('/create', (req, res) => {


    res.render('celebrities/new-celebrity')
})

router.post('/create', (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    console.log('No arriesgo')

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(celebrity => res.redirect('/celebrities'))
        .catch(err => console.log(err))



})





router.post('/:id/delete', (req, res) => {

    const { id } = req.params

    Celebrity
        .findByIdAndDelete(id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))


});


// all your routes here

module.exports = router;