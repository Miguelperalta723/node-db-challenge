
exports.up = function(knex) {
  return knex.schema
    .createTable('projects' , tbl => {
        tbl.increments();
        tbl.string('name', 280).unique().notNullable();
        tbl.string('project_description', 280);
        tbl.boolean('completed');
    })
    .createTable('resources' , tbl => {
        tbl.increments();
        tbl.string('name', 280).unique().notNullable();
        tbl.string('resource_description', 280);
    })
    .createTable('tasks' , tbl => {
        tbl.increments();
        tbl.string('task_description' , 280).notNullable();
        tbl.string('notes' , 280);
        tbl.boolean('completed');
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};