const db = require('../data/dbConfig.js')

module.exports = {
    find,
    add,
    findResources,
    addResources,
    findTasks,
    addTasks
}

function find() {
    return db('projects')
};

function add(newPro) {
    return db('projects').insert(newPro)
};
function findResources() {
    return db('resources')
};
function addResources(newRes) {
    return db('resources').insert(newRes)
};
function findTasks(project_id) {
    return db('tasks')
    .join('projects', 'projects.id','tasks.project_id')
    .select('tasks.id', 'tasks.task_description','tasks.notes','tasks.completed', 'projects.name','projects.project_description')
    .where({project_id});
};
function addTasks(newTa) {
    return db('resources').insert(newTa)
};
