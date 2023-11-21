const routes = require("express").Router();
const PostForms = require("./models/PostForms");

routes.get("/", (req, res) => {
    return res.json({ data: "hello world!!!" })
});

routes.post("/login", (req, res) => {
    return res.json({ data: "Aqui vai ser o objeto do usuario ou error" })
});

routes.post("/send_form_km", async (req, res) => {
    const post = await PostForms.create({
        name: "teste",
        kilometers: "200",
        week: "3"
    });

    return res.json(post);

});

routes.get("/get_all_register", (req, res) => {
    return res.json({ data: "ok" })
});


module.exports = routes; 