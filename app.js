import express from "express";
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Premier league table')

  const responseObj = {
    status: "success",
    data: {
    msg: "This is a message from the response object"
    }
}

// Sending a response
return res.status(299).json(responseObj);
});

app.get('/teams', async function (req, res) {
    // create a variable which awaits
    res.send('Premier league table');
  });

app.listen(PORT, function () {
    console.log(`Server is now listening on http://localhost:${PORT}`);
  });