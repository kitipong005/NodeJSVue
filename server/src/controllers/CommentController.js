const { Comment } = require('../models')

module.exports = {
    // get all comment
    async index(req, res) {
        try {
            const comments = await Comment.findAll()
            res.send(comments)
        } catch (error) {
            res.status(500).send({
                error: 'The comments information was incorrect'
            })
        }

    },

    // create comment
    async create(req, res) {
        try {
            const comment = await Comment.create(req.body)
            res.send(comment.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'Create comment incorrect'
            })
        }
    },

    // edit comment
    async put(req, res) {
        try {
            await Comment.update(req.body, {
                where: {
                    id: req.params.commentId
                }
            })
        } catch (error) {
            req.status(500).send({
                error: 'Update comment incorrect'
            })
        }
    },

    //delete
    async remove(req, res) {
        try {
            const comment = await Comment.findOne({
                where: {
                    id: req.params.commentId
                }
            })

            if (!comment) {
                return res.status(403).send({
                    error: 'The comment information was incorrect'
                })
            }

            await comment.destroy()
            res.send(comment)
        } catch (err) {
            req.status(500).send({
                error: 'The comment information was incorrect'
            })
        }
    },

    // get comment by id
    async show(req, res) {
        try {
            const comment = await Comment.findById(req.params.commentId)
            res.send(comment)
        } catch (error) {
            req.status(500).send({
                error: 'The comment information was incorrect'
            })
        }
    }
}