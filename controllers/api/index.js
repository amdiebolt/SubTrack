const router = require('express').Router();
const userRoutes = require('./userRoutes');
const subRoutes = require('./sub')

router.use('/users', userRoutes);
router.use('/sub', subRoutes)

module.exports = router;
