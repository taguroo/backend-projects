import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line

app.get('/api', (_req, res) => {
  const now = new Date();
  res.json({
    unix: now.getTime(),
    utc: now.toUTCString()
  });
});

app.get('/api/:date', (req, res) => {
  let dateParams = req.params.date;

  if (!dateParams) {
    const now = new Date();
    return res.json({
      unix: now.getTime(),
      utc: now.toUTCString()
    })
  }

  if (!isNaN(dateParams)) {
    dateParams = parseInt(dateParams);
  }

  const dateObject = new Date(dateParams);

  if (isNaN(dateObject.getTime())) {
    return res.json({ error: "Invalid Date" })
  }

  res.json({
    unix: dateObject.getTime(),
    utc: dateObject.toUTCString(),
  })
})

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
