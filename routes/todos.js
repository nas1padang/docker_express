const express = require('express');
const router = express.Router();
const { Todo } = require('../models');

// tampilkan semua selain task delete
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll({
            where: { deletedAt: null }
        });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ambil berdasarkan id tanpa task delete
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findOne({
            where: { id: req.params.id, deletedAt: null }
        });
        if (!todo) return res.status(404).json({ error: 'Todo not found' });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// buat todo baru
router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create({ title: req.body.title });
        res.status(201).json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// delete soft service
router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findOne({
            where: { id: req.params.id, deletedAt: null }
        });
        if (!todo) return res.status(404).json({ error: 'Todo not found' });


        todo.deletedAt = new Date();
        await todo.save();

        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
