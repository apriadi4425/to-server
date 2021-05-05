const app = require('express')()

app.use('/', (req, res) => {
	res.json({
		data : 'belajar docker'
	})
})

app.listen(3000, () => console.log('aplikasi berjalan di port 3000'))