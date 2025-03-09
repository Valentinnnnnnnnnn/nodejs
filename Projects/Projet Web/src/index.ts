import express, { Request, Response } from 'express'
import session from 'express-session'
import { codeGenerator } from './generator'
import { verifyGuess } from './verifier'

declare module 'express-session' {
    interface SessionData {
        lastConfig?: { codeLength: number, attempts: number }
        code?: number[]
        attemptsLeft?: number
        guesses?: Object[]
        codeLength?: number
    }
}

const app = express()

app.set("view engine", "ejs")
app.set("views", "src/views")

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true })) 

app.use(session({
    secret: "VBN4582BV246",
    resave: false,
    saveUninitialized: false,
  }))

app.use((req, res, next) => {
    /* 
    Middleware to log requests and set default values for lastConfig if not set
    */
    if (!req.session.lastConfig) {
        req.session.lastConfig = { codeLength: 5, attempts: 5 }
    }
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get("/", (req: Request, res: Response) => {
    /* 
    Render the index page
    */
    res.render("index", { LastCodeLength: req.session.lastConfig.codeLength, LastAttempts: req.session.lastConfig.attempts })
}) 

app.get("/game", (req: Request, res: Response) => {
    /*
    Render the game page
    */
    res.render("game", { attemptsLeft: req.session.attemptsLeft, guesses: req.session.guesses, codeLength: req.session.codeLength }) 
}) 

app.post("/start", (req: Request, res: Response) => {
    /*
    Start a new game
    @param codeLength: number
    @param attempts: number
    */
    const codeLength = parseInt(req.body.codeLength)
    const attempts = parseInt(req.body.attempts)

    req.session.code = codeGenerator(codeLength)
    req.session.codeLength = codeLength
    req.session.attemptsLeft = attempts
    req.session.guesses = []
    req.session.lastConfig = { codeLength, attempts }

    console.log(req.session.code)
    res.redirect("/game")
}) 

app.post("/play", (req: Request, res: Response) => {
    /*
    Play a turn
    @param guess: string
    */
    let guess = req.body.guess.split("").map(Number)
    let guessResult = verifyGuess(guess, req.session.code)
    req.session.guesses.push({
        input: req.body.guess,
        correct: guessResult.correct,
        misplaced: guessResult.misplaced
    }) 
    req.session.attemptsLeft--
    res.redirect("/game")
}) 

app.listen(3000, () => {})