var orm = require("../config/orm.js");

// Code to call the orm functions using burger specific input for the orm.
var burger = {
    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.insertOne(name, function (res) {
            cb(res);
        })
    },
    update: function (condition, id, cb) {
        orm.updateOne(condition, id, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;