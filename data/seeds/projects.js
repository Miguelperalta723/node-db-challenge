
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'project one', project_description: 'description for project one', completed:false},
        {id: 2, name: 'project two', project_description: 'description for project two', completed:false},
        {id: 3, name: 'project three', project_description: 'description for project three', completed:false}
      ]);
    });
};
