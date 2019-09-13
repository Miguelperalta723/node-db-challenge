
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'wood', resource_description: 'made of trees'},
        {id: 2, name: 'metal', resource_description: 'made of rocks'},
        {id: 3, name: 'brick', resource_description: 'made of stuff'}
      ]);
    });
};
