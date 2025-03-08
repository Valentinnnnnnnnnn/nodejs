import express, { Request, Response } from 'express';

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/", (req: Request, res: Response) => {
    res.render("index", { title: "Hello, World!" });
});

app.listen(3000, () => {});
