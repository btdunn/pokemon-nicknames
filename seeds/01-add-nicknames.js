exports.seed = function(knex) {
  return knex("nickname")
    .del()
    .then(() => {
      return knex("nickname").insert([{
        id: 1,
        pokemon_id: 7,
        content: "Lil' Squirty",
      }]);
    });
};
