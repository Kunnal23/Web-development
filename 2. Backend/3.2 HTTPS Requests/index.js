import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", (req, res) => {
	res.send("<h1>8651019096</h1>");
});

app.get("/about", (req, res) => {
	res.send("<h1>It's all about me.</h1>");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
});
