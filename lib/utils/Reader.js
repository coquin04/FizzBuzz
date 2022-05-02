const fs = require("fs");
class Reader {
  static readJsonFile(path) {
    // Part 1 Read json file ===========================
    const rawdata = fs.readFileSync(path);
    const explorers = JSON.parse(rawdata);
    return explorers;
  }
}
module.exports = Reader;
