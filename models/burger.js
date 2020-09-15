const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", ((res) => {
            cb(res);
        }))
    },

    create: function(cols, vals, cb) {
        orm.insertOne("burgers", vals, ((res) => {
            cb(res);
        }));
    },

    update: function(id_num, cb) {
        orm.updateOne("burgers", "devoured", 1, "id", id_num, ((res) => {
            cb(res)
        }));
    }


}
module.exports = burger;