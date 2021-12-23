const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blog')

router.use('/users', userRoutes);
router.use('/blog', blogRoutes)

module.exports = router;
