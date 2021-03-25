const app = require("express")();

app.get("/", (req, res) => {
  res.send("hello, haha huhu hihi");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server running at", PORT));
