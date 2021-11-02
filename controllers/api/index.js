const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const muralRoutes = require('./muralRoutes');

router.use('/users', userRoutes);
router.use('/murals', muralRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;