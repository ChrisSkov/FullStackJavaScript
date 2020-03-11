const express = require("express")
const app = express();


// app.get('/', (req, res, next) =>
// {
//     let status = {}
//     status.host = req.host;
//     status.headers= req.headers
//     status.time = new Date();
//     console.log(status)
//     req.role = "admin"
//     next();
// })

app.get("/", (req, res) =>
{
    res.send("sker der: " )
})
app.get("/api/user", (req, res) =>
{
    const user = {name: "Satan"};
    res.json(user)
})
app.get("/api/user2", (req, res) =>
{
    throw new Error("fuck mand")
    res.json(user)
})







app.listen(2345, () => console.log("Server started"))