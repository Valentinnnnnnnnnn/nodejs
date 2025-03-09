"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const generator_1 = require("./generator");
const verifier_1 = require("./verifier");
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express_1.default.static('./public'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({
    secret: "VBN4582BV246",
    resave: false,
    saveUninitialized: false,
}));
app.use((req, res, next) => {
    /*
    Middleware to log requests and set default values for lastConfig if not set
    */
    if (!req.session.lastConfig) {
        req.session.lastConfig = { codeLength: 5, attempts: 5 };
    }
    console.log(`${req.method} ${req.url}`);
    next();
});
app.get("/", (req, res) => {
    /*
    Render the index page
    */
    res.render("index", { LastCodeLength: req.session.lastConfig.codeLength, LastAttempts: req.session.lastConfig.attempts });
});
app.get("/game", (req, res) => {
    /*
    Render the game page
    */
    res.render("game", { attemptsLeft: req.session.attemptsLeft, guesses: req.session.guesses, codeLength: req.session.codeLength });
});
app.post("/start", (req, res) => {
    /*
    Start a new game
    @param codeLength: number
    @param attempts: number
    */
    const codeLength = parseInt(req.body.codeLength);
    const attempts = parseInt(req.body.attempts);
    req.session.code = (0, generator_1.codeGenerator)(codeLength);
    req.session.codeLength = codeLength;
    req.session.attemptsLeft = attempts;
    req.session.guesses = [];
    req.session.lastConfig = { codeLength, attempts };
    console.log(req.session.code);
    res.redirect("/game");
});
app.post("/play", (req, res) => {
    /*
    Play a turn
    @param guess: string
    */
    let guess = req.body.guess.split("").map(Number);
    let guessResult = (0, verifier_1.verifyGuess)(guess, req.session.code);
    req.session.guesses.push({
        input: req.body.guess,
        correct: guessResult.correct,
        misplaced: guessResult.misplaced
    });
    req.session.attemptsLeft--;
    res.redirect("/game");
});
app.listen(3000, () => { });
