const orm = require("../config/orm");

const burger = {
    all: () => {
        return orm.selectAll();
    },

    insert: (name) => {
        return orm.insertOne(name);
    },

    update: (name, devoured) => {
        return orm.updateOne(name, devoured);
    }
};

module.exports = burger;
