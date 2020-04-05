const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.get('/', (req, res) => {
	res.send(`
    <h1>TableAPI</h1>
    <div>Simple API for CRUD operations</div>
    <div>For more information (routes / usage ) -> <a href="https://github.com/WarOnKhoff/TableApi">Github</a></div>
    `)
})
app.use('/posts', require('./routes/posts'))

const startDB = async () => {
	try {
		console.log('Starting connection to DB...')
		await mongoose.connect(
			process.env.DB_CONNECTION,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			},
			() => console.log('Connected to DB!'),
		)
		app.listen(PORT, () => console.log(`App is running on port ${PORT}!`))
	} catch (e) {
		console.log('Server error', e)
		process.exit(1)
	}
}

startDB()
