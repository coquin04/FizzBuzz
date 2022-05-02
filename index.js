// Clase anterior con la que obtenemos los explorers
const FizzbuzzService = require("./lib/services/FizzbuzzService");
const ExplorerService = require("./lib/services/ExplorerServices");
const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("./data/explorers.json");

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");
const explorer1 = { name: "Explorer1", score: 1 };
console.log(FizzbuzzService.applyValidationInExplorer(explorer1)); // {name: "Explorer1", score: 1, trick: 1}

const explorer3 = { name: "Explorer3", score: 3 };
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)); // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = { name: "Explorer5", score: 5 };
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)); // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = { name: "Explorer15", score: 15 };
console.log(FizzbuzzService.applyValidationInExplorer(explorer15));
// {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
