const express = require('express')

const app = express()

app.get('/404.html', (req, res) => {
	res.status(404)

	if (req.accepts('html')) {
		res.render('404', { url: req.url })
		return
	}
})
