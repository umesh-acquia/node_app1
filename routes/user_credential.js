module.exports = (app, db) => {

	// POST /login request
	app.get('/login', (req, res) => {
		console.log("login initiated.");
		res.send("login");
	});
}