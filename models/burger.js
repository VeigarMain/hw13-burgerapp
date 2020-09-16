const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", ((res) => {
            cb(res);
        }))
    },

    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, ((res) => {
            console.log("burgers", cols, vals);
            cb(res);
        }));
    },

    update: function(id_num, cb) {
        console.log("burger", id_num);
        orm.updateOne("burgers", "devoured", id_num, "id", cb, ((res) => {
            cb(res)
        }));
    }


}
module.exports = burger;