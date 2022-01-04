const router = require('express').Router();
const userRoutes = require('./userRoutes');
const subsRoutes = require('./sub')

router.use('/users', userRoutes);
router.use('/sub', subsRoutes)

module.exports = router;
