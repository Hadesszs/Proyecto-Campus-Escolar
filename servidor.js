const Express = require("express");
const PORT = 3000;
const app = Express();
const path = require("path");





app.get("/", (req, res) => {
res.sendFile(path.resolve(__dirname, "index.html"))
})

app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "login.html"))
    })
   
        app.use("/Public", Express.static(path.join(__dirname, "public")))


app.listen(PORT, (req,res) => {
console.log(`el servidor esta escuchando en el puerto ${PORT}...`);
})