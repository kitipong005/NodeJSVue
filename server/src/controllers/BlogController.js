const { Blog } = require('../models');

module.exports = {
    //get all blog
    async index(req, res) {
        try {
            const blogs = await Blog.findAll()
            res.send(blogs)
        } catch (error) {
            res.status(500).send({
                error: 'The blogs information was incorrect'
            })
        }
    },

    //create blog
    async create(req, res) {
        try {
            const blog = await Blog.create(req.body)
            res.send(blog.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'The blog incorrect'
            })
        }
    },

    // edit blog,
    async put(req, res) {
        try {
            const blog = await Blog.update(req.body, {
                where: {
                    id: req.params.blogId
                }
            })
            res.send(req.body)
        } catch (error) {
            res.status(500).send({
                error: 'Update blog incorrect'
            })
        }
    },

    // delete blog
    async remove(req, res) {
        try {
            const blog = await Blog.findOne({
                where: {
                    id: req.params.blogId
                }
            })
            if (!blog) {
                return res.status(403).send({
                    error: 'The blog information was incorrect'
                })
            }
            await blog.destroy()
            res.send(blog)
        } catch (error) {
            req.status(500).send({
                error: 'The blog information was incorrect'
            })
        }
    },

    // get blog by id
    async show(req, res) {
        try {
            const blog = await Blog.findById(req.params.blogId)
            res.send(blog)
        } catch (error) {
            req.status(500).send({
                error: 'The blog information was incorrect'
            })
        }
    }
}