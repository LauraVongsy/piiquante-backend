const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/Sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, sauceCtrl.createSauce );

router.delete('/:id',auth,  sauceCtrl.deleteSauce);

router.put('/:id', auth, multer, sauceCtrl.modifySauce);

router.get('/:id',auth,  sauceCtrl.getOneSauce);

router.get('/',auth,  sauceCtrl.getAllSauces);

router.post('/:id/like',auth, sauceCtrl.likeSauce);

module.exports = router;