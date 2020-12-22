const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
router.post('/user-radio-group', function(req, res) {
    /*
    if the answer is yes
        take to declaration page
    else if no
        take to check your answers page
    */

    if(req.body['changed-name'] === 'yes') {
        res.redirect('/check-your-answers');
    } else {
        res.redirect('/confirmation');
    }
});


module.exports = router
