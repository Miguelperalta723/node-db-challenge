const express = require('express');
const projectsRouter = require('./projectsApi/projectsRouter.js')

const server = express();

server.use(express.json());
server.use('/projects', projectsRouter)

server.get('/', (req, res) => {
    res.send('api is up')
});


module.exports = server;