- a `project` can have multiple `tasks`.
- a `task` belongs to only one `project`.
- a `project` can use multiple `resources`.
- the same `resource` can be used in multiple `projects`.
- when adding `projects` the client must provide a name, the description is optional.
- when adding `resources` the client must provide a name, the description is optional.
- when adding a `task` the client must provide a description, the notes are optional.
- when adding a `task` the client must provide the `id` of an existing project.
- for `projects` and `tasks` if no value is provided for the `completed` property, the API should provide a default value of `false`.


-project(one)  ---- tasks(many)
-project(many)-----resources(many)

project
    -id
    -name(required)
    -decription(optional)
    -completed default to false if no value provided

resources
    -id
    -name(unique)(required)
    -description(optional)

task
    -id
    -description(required)
    -notes(optional)
    -completed default to false if no value provided
    -project_id(foreign)

