const connection = require("./connection");

const orm = {
    selectAll: () => {
        const query = "SELECT * FROM burgers";

        return new Promise((resolve) => {
            connection.query(query, (err, res) => {
                if (err) throw err;
                resolve(res);
            });
        });
    },

    insertOne: (burger) => {
        const query = "INSERT INTO burgers SET ?";
        const values = [
            {
                burger_name: burger.name,
                devoured: burger.devoured
            }
        ];

        return new Promise((resolve) => {
            connection.query(query, values, (err, res) => {
                if (err) throw err;
                resolve(res);
            });
        });
    },

    updateOne: (burger) => {
        const query = "UPDATE burgers SET ? WHERE ?";
        const values = [
            {
                devoured: burger.devoured
            },
            {
                burger_name: burger.name
            }
        ];

        return new Promise((resolve) => {
            connection.query(query, values, (err, res) => {
                if (err) throw err;
                resolve(res);
            });
        });
    }
};

module.exports = orm;
