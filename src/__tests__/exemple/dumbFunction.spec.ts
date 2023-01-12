import { describe, it, expect } from "vitest";
import dumbFunction from "../../exemple/dumbFunction";

describe(">>>> dumb function", () => {
  it("should return a sum of two numbers", () => {
    const n1 = 10;
    const n2 = 5;
    const expected = 15;
    const result = dumbFunction(n1, n2);

    expect(result).toBe(expected);
  });
});
