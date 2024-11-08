// Import the mergeSort function from your file
const { mergeSort } = require("./mergeSort");

describe("mergeSort", () => {
  it("should return an empty array when given an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  it("should return the same array when given a single element", () => {
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([99])).toEqual([99]);
  });

  it("should correctly sort an array of numbers", () => {
    const arr = [3, 2, 1, 13, 8, 5, 0, 1];
    expect(mergeSort(arr)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it("should correctly sort an array with duplicate values", () => {
    const arr = [5, 2, 5, 1, 5, 0];
    expect(mergeSort(arr)).toEqual([0, 1, 2, 5, 5, 5]);
  });

  it("should correctly sort an array that is already sorted", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should correctly sort an array with negative numbers", () => {
    const arr = [3, -2, 1, -13, 8, -5, 0, -1];
    expect(mergeSort(arr)).toEqual([-13, -5, -2, -1, 0, 1, 3, 8]);
  });

  it("should return the same array if all elements are equal", () => {
    const arr = [7, 7, 7, 7, 7];
    expect(mergeSort(arr)).toEqual([7, 7, 7, 7, 7]);
  });
});

