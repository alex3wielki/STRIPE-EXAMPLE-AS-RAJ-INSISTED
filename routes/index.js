var express = require('express');
var router = express.Router();
/* GET home page. */
router.route('/')
// https://youtu.be/aZVZ5Z-ZcXs
    .get((req, res, next) => res.render('index', {title: 'Subscribe Us Now!'}))
    .post((req, res, next) => {
        // Grab the amount from the view and pass it on. Render total.

    });


// https://stripe.com/docs/api/node#create_charge
router.route('/pay')
    .post((req, res, next) => {
        // key = "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
        // Create a new chargeS, put in the amount, currency, source: 'tok_visa', description.
        // Console.log the responses, redirect to history and if error => render error

});


// https://stripe.com/docs/api/node#list_charges
router.route('/history')
    .get((req, res, next) => {
        // Create a stripe object with the key = "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
        // List the chargeS, then console log them and the error. (then, catch)

        // Can limit.
    });
module.exports = router;