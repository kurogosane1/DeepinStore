const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	// res.send('Hello world');
});

router.post('/DeepinPro', (req, res, next)=> {
	console.log(req.body);
	res.send('Your post was received')
})
module.exports = router;
