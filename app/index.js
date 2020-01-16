const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.header("Content-Type", "text/html");
  console.log(`Node PID ${process.pid} Handling request of ${req.hostname}...`);
  res.send(`
    <h1>Hi ${process.env.MESSAGE}!</h1>
    Node PID: ${process.pid}
  `);
});

app.listen(PORT, () => {
  console.log(`Node Server listening on port ${PORT}...`);
});
