const connection = require("./connection");

const orm = {
    selectAll: () => {
        const query = "SELECT * FROM burgers";

        return new Promise((resolve) => {
            connection.query(query, (err, res) => {
                if (err) throw err;
                resolve(res.map(burger => burger.name));
            });
        });
    },

    insertOne: (name) => {
        const query = "INSERT INTO burgers SET ?";
        const values = [
            {
                burger_name: name,
                devoured: false
            }
        ];

        return new Promise((resolve) => {
            connection.query(query, values, (err, res) => {
                if (err) throw err;
                resolve(res);
            });
        });
    },

    updateOne: (name, devoured) => {
        const query = "UPDATE burgers SET ? WHERE ?";
        const values = [
            {
                devoured: devoured
            },
            {
                burger_name: name
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
