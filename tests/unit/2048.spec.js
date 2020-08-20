import { indicesOfFreeCells, squashRow } from "@/2048";

describe("2048", () => {
  it("should return all indices for an empty field", () => {
    expect(indicesOfFreeCells([0, 0, 0, 0])).toEqual([0, 1, 2, 3]);

    expect(indicesOfFreeCells([0, 0])).toEqual([0, 1]);
  });
  it("should filter already filled cells", () => {
    expect(indicesOfFreeCells([0, 2, 2, 0])).toEqual([0, 3]);
  });

  it("should return an empty array for a completely filled field", () => {
    expect(indicesOfFreeCells([2, 2, 2, 2])).toEqual([]);
  });

  it("should combine two 2s", () => {
    expect(squashRow([2, 2, 0, 0])).toEqual([4, 0, 0, 0]);
    expect(squashRow([0, 2, 2, 0])).toEqual([4, 0, 0, 0]);
    expect(squashRow([0, 0, 2, 2])).toEqual([4, 0, 0, 0]);
  });
});
