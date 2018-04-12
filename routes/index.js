var express = require('express');
var router = express.Router();
/* GET home page. */
router.route('/')
    .get((req, res, next) => res.render('index', {title: 'Express'}))
    .post((req, res, next) => {
        var stripe = require('stripe')("sk_test_BQokikJOvBiI2HlWgH4olfQ2");
        stripe.charges.create({
            amount: 500,
            currency: 'pln',
            source: 'tok_visa',
            description: 'Our example'
        }).then(cha => {
            console.log(cha);
            res.render('paid',{title:'Thank you dildo xD'});
        }).catch(e => console.log(e));
    });
module.exports = router;