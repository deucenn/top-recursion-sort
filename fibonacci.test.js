const { fibs } = require("./fibonacci");

describe("fibs", () => {});
it("should return an empty array when input is 0", () => {
  expect(fibs(0)).toEqual([]);
});
it("should return [0] when input is 1", () => {
  expect(fibs(1)).toEqual([0]);
});
it("should return [0, 1] when input is 2", () => {
  expect(fibs(2)).toEqual([0, 1]);
});
it("should return the correct Fibonacci sequence for input 5", () => {
  expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
});

