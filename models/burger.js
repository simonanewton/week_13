const orm = require("../config/orm");

const burger = {
    all: () => {
        return orm.selectAll();
    },

    insert: (name) => {
        return orm.insertOne(name, false);
    },

    update: (id) => {
        return orm.updateOne(id, true);
    }
};

module.exports = burger;
