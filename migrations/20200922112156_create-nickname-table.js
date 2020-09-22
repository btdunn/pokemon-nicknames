exports.up = function(knex) {
  return knex.schema.createTable("nickname", table => {
    table.integer("id")
    table.integer("pokemon_id")
    table.text("content")
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("nickname")
};
