const { Schema, model, Types } = require('mongoose')

const PostSchema = Schema({
	companyName: {
		type: String,
		require: true,
	},
	stack: {
		type: String,
		require: true,
		default: 'React',
	},
	status: {
		type: String,
		require: true,
		default: 'Waiting',
	},
	payRate: {
		type: Number,
	},
	created: {
		type: Date,
		require: true,
		default: Date.now,
	},
})

module.exports = model('Posts', PostSchema)
