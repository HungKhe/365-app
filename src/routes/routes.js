const express = require('express');
const router = express.Router();

router.route('/register')
    .get(authToken.initGetCodeToken);

// router.route('/promotion')
//     .get(promotion.initGetPromotion)
//     .post(promotion.initAddPromotion)

module.exports = router;