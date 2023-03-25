const express = require('express');//sets requirements for file
const app = express();//makes app the shortcut to calling things in express

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;//defines a port for the middleware to listen on

// JSON body parsing using built-in middleware
app.use(express.json());//takes apart the json file to use the code

// Serve up the front-end static content hosting
app.use(express.static('public'));//this is what is handed up to be used AKA 'hey program, look for stuff in the public repository'

// Router for service endpoints
const apiRouter = express.Router();//define the api and where to rout it
app.use(`/api`, apiRouter);//defines the path to get stuff from the api

// GetScores
apiRouter.get('/scores', async (_req, res) => {// GO GET THEM DATA!!!!
  const scores = await Db.getHighScores(); //HERE YOU GO!!!!
  res.send(scores); //at start, collects data for the api
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' }); //
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});