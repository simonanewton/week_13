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

    insertOne: (name, devoured) => {
        const query = "INSERT INTO burgers SET ?";
        const values = [
            {
                burger_name: name,
                devoured: devoured
            }
        ];

        return new Promise((resolve) => {
            connection.query(query, values, (err, res) => {
                if (err) throw err;
                resolve(res);
            });
        });
    },

    updateOne: (id, devoured) => {
        const query = "UPDATE burgers SET ? WHERE ?";
        const values = [
            {
                devoured: devoured
            },
            {
                id: id
            }
        ];

        return new Promise((resolve) => {
            connection.query(query, values, (err, res) => {
                if (err) throw err;
                resolve(res);
            });
        });
    },

    deleteOne: (id) => {
        const query = "DELETE FROM burgers WHERE ?";
        values = [
            {
                id: id
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
