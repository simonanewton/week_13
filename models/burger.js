const orm = require("../config/orm");

const burger = {
    all: async () => {
        return await orm.selectAll();
    },

    insert: async (name) => {
        return await orm.insertOne(name);
    },

    update: async (name, devoured) => {
        return await orm.updateOne(name, devoured);
    }
};

module.exports = burger;
