import { squashRow } from "@/2048";

describe("2048", () => {
  it("should squash a row", () => {
    expect(squashRow([2, 2, 0, 0])).toEqual([4, 0, 0, 0]);
  });
});
