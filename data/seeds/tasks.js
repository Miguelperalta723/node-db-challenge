
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'task description one', notes: 'task notes one', completed: true, project_id: 1},
        {id: 2, task_description: 'task description two', notes: 'task notes two', completed: false, project_id: 2},
        {id: 3, task_description: 'task description three', notes: 'task notes three', completed: false, project_id: 3}
      ]);
    });
};

