const ExplorerService = require("../../lib/services/ExplorerServices");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");
const Reader = require("../../lib/utils/Reader");
class ExplorerController {
  static getExplorersByMission(mission) {
    const explorers = Reader.readJsonFile("./FizzBuzz/data/explorers.json");
    const explorersByMission = ExplorerService.filterByMission(
      explorers,
      mission
    );
    return explorersByMission;
  }
  static getExplorersUsernamesByMission(mission) {
    const explorers = Reader.readJsonFile("./FizzBuzz/data/explorers.json");
    const explorersUsernamesByMission =
      ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    return explorersUsernamesByMission;
  }
  static getExplorersAmountByMission(mission) {
    const explorers = Reader.readJsonFile("./FizzBuzz/data/explorers.json");
    const explorersAmountByMission =
      ExplorerService.getExplorersAmountByMission(explorers, mission);
    return explorersAmountByMission;
  }
}
module.exports = ExplorerController;
