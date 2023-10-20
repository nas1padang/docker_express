const express = require('express');
const app = express();
const PORT = 8000

const todosRouter = require('./routes/todos');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/todos', todosRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})