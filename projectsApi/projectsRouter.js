const express = require('express');

const Projects = require('./projectsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
      projects.forEach(project => {
        if (project.completed === 1) {
            project.completed = true
        } else {
            project.completed = false
        }
      })
      res.status(200).json(projects);
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: `${error}`
        })
    })
});

router.post('/', (req, res) => {
    const newProject = req.body;
    Projects.add(newProject)
    .then(newProjects => {
        res.status(200).json(newProjects)
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: `${error}`
        })
    })
});

router.get('/resources', (req, res) => {
    Projects.findResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: `${error}`
        })
    })
});

router.post('/resources', (req, res) => {
    const newResource = req.body;
    Projects.addResources(newResource)
    .then(newResources => {
        res.status(200).json(newResources)
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: `${error}`
        })
    })
});

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
     Projects.findTasks(id)
    .then(tasks => {
      tasks.forEach(task => {
        if (task.completed === 1) {
            task.completed = true
        } else {
            task.completed = false
        }
      })
      res.status(200).json(tasks);
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: `${error}`
        })
    })
});

router.post('/tasks', (req, res) => {
    const newTask = req.body;
    Projects.addTasks(newTask)
    .then(newTasks => {
        res.status(200).json(newTasks)
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: `${error}`
        })
    })
});


module.exports = router;