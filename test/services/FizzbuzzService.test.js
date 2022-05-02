const FizzbuzzService = require("../../lib/services/FizzbuzzService");
describe("Unit test for FizzbuzzService class.", () => {
  test("1. Prueba del metodo applyValidationInExplorer", () => {
    const explorer1 = { name: "Explorer1", score: 1 };
    const newExplorer1 = FizzbuzzService.applyValidationInExplorer(explorer1);
    //
    const explorer3 = { name: "Explorer3", score: 3 };
    const newExplorer3 = FizzbuzzService.applyValidationInExplorer(explorer3);
    //
    const explorer5 = { name: "Explorer5", score: 5 };
    const newExplorer5 = FizzbuzzService.applyValidationInExplorer(explorer5);
    //
    const explorer15 = { name: "Explorer15", score: 15 };
    const newExplorer15 = FizzbuzzService.applyValidationInExplorer(explorer15);
    //
    expect(newExplorer1).toStrictEqual({
      name: "Explorer1",
      score: 1,
      trick: 1,
    });
    expect(newExplorer3).toStrictEqual({
      name: "Explorer3",
      score: 3,
      trick: "FZ",
    });
    expect(newExplorer5).toStrictEqual({
      name: "Explorer5",
      score: 5,
      trick: "BUZZ",
    });
    expect(newExplorer15).toStrictEqual({
      name: "Explorer15",
      score: 15,
      trick: "FIZZBUZZ",
    });
  });
});
