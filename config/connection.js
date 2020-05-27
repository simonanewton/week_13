var mysql = require("mysql");
var inquirer = require("inquirer");

async function getPassword() {
	const answer = await inquirer.prompt([
		{
			type: "password",
			name: "password",
			message: "What is your MySQL root password?"
		}
	]);

	return answer.password;
}

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "french1",
	database: "burgers_db"
});

connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;
