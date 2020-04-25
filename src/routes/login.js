const Router = require('express/lib/router');
const loginController = require('../controllers/login');

const router = Router();

router.route('/login').post(loginController);

module.exports = router;
