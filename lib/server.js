const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const { request } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
  response.json({ message: "FizzBuzz Api welcome!" });
});
// Endpoint 1 for explorersInMission
app.get("/v1/explorers/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorersInMission = ExplorerController.getExplorersByMission(mission);
  response.json(explorersInMission);
});
// Endpoint 2 for explorersAmountInMission
app.get("/v1/explorers/amount/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorersAmountInMission =
    ExplorerController.getExplorersAmountByMission(mission);
  response.json({ mission: mission, quantity: explorersAmountInMission });
});
// Endpoint 3 for explorersUsernamesByMission
app.get("/v1/explorers/usernames/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorersUsernamesByMission =
    ExplorerController.getExplorersUsernamesByMission(mission);
  response.json({ mission: mission, explorers: explorersUsernamesByMission });
});
app.listen(port, () => {
  console.log(`FizzBuzz API in localhost:${port}`);
});
