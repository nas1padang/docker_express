require('dotenv').config();

const request = require('supertest');
const sequelizeMock = require('sequelize-mock');
const express = require('express');
const todoRoutes = require('../routes/todos');

const app = express();
app.use(express.json());
app.use('/', todoRoutes);

const dbMock = new sequelizeMock();
const TodoMock = dbMock.define('Todo', {
    title: 'Test Todo',
    deletedAt: null
});

ID = 1

describe('Todo API', () => {

    test('mendapatkan semua data', async () => {
        TodoMock.$queueResult([TodoMock.build(), TodoMock.build()]);
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(10);
    });

    test('ambil satu data berdasarkan id', async () => {
        TodoMock.$queueResult(TodoMock.build()); // mock single result
        const res = await request(app).get(`/${ID}`);
        expect(res.status).toBe(200);
        expect(res.body.title).toBe(`Task ${ID}`);
    });

    test('membuat data baru', async () => {
        const newTodo = {
            title: 'Task New'
        };

        TodoMock.$queueResult(TodoMock.build(newTodo));
        const res = await request(app).post('/').send(newTodo);
        expect(res.status).toBe(201);
        expect(res.body.title).toBe(newTodo.title);
    });

    test('update data', async () => {
        const updatedTitle = 'Task Done';


        const todoToUpdate = TodoMock.build({ id: ID, title: 'New Task', deletedAt: null });
        TodoMock.$queueResult(todoToUpdate);

        todoToUpdate.title = updatedTitle;
        TodoMock.$queueResult(todoToUpdate.save());

        const res = await request(app).put(`/${ID}`).send({ title: updatedTitle });

        expect(res.status).toBe(200);
        expect(res.body.title).toBe(updatedTitle);
    });

    test('soft delete', async () => {
        const todoToDelete = TodoMock.build({ id: ID, title: 'Todo to delete', deletedAt: null });


        TodoMock.$queueResult(todoToDelete);

        todoToDelete.deletedAt = new Date();
        TodoMock.$queueResult(todoToDelete);

        const res = await request(app).delete(`/${ID}`);
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Todo deleted');
    });


});

