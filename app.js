import express from "express";
const app = express();
const PORT = 3000;

import {
  getTeams,
  getTeamByID,
  // addTeam,
  // editTeam,
  // deleteTeam,
} from "./team.js";

//built in middleware
app.use(express.json()); // Parses the body data and make it available on req.body


app.get('/', function (req, res) {
  res.send('Premier league table')
});


  app.get("/teams", async function(req, res) {
    const allTeams = await getTeams();
    // return the array of all the quotes
    // prepare a response
    const responseObj = {
      status: "success",
      data: allTeams,
    };
  return res.status(200).json(responseObj);
  });

  app.get("/teams/:id", async function(req, res) {
    // store id parameter as a variable named id
    const teamsId = req.params.id;
    const team = await getTeamByID(teamsId);
    const responseObj = {
      status: "success",
      data: team,
    };
  return res.status(200).json(responseObj);
  })

app.listen(PORT, function () {
    console.log(`Server is now listening on http://localhost:${PORT}`);
  });