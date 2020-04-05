const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
	try {
		const posts = await Post.find()
		res.json(posts)
	} catch (err) {
		res.json({ message: error })
	}
})
router.post('/', async (req, res) => {
	const post = new Post({
		companyName: req.body.companyName,
		stack: req.body.stack,
		status: req.body.status,
		payRate: req.body.payRate,
		companyRate: req.body.companyRate,
	})
	try {
		const created = await post.save()
		res.json(created)
	} catch (err) {
		res.json({ message: error })
	}
})
// Specific routes

router.get('/:id', async (req, res) => {
	try {
		const created = await Post.findById(req.params.id)
		res.json(created)
	} catch (err) {
		res.json({ message: error })
	}
})

router.delete('/:id', async (req, res) => {
	try {
		const removed = await Post.remove({ _id: req.params.id })
		res.json(removed)
	} catch (err) {
		res.json({ message: error })
	}
})

router.patch('/:id', async (req, res) => {
	try {
		const { companyName, stack, status, payRate } = req.body
		const updated = await Post.updateOne(
			{ _id: req.params.id },
			{ $set: { companyName, stack, status, payRate } },
		)
		res.json(updated)
	} catch (err) {
		res.json({ message: error })
	}
})

module.exports = router
