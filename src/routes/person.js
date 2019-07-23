const express = require('express');
const router = express.Router();

router.get("/person", (req, res) => {
	if (req.query.name) {
		res.status(200).send(`you have sent ${req.query.name}`);
	}
	res.status(200).send("req a person");
});

router.get("/person/:name", (req, res) => {
	res.status(200).send("req a person " + req.params.name);
});

module.exports = router