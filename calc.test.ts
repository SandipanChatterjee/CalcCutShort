import { add } from "./calc.ts";

describe("Calc", () => {
  test(`should return positive number 3 upon added args = "1,2"`, () => {
    expect(add("1,2")).toBe(3);
  });

  test(`should throw error message for args = "1,2,-3"`, () => {
    expect(() => add("1,2,-3")).toThrow("negative numbers not allowed-3");
  });

  test(`should ignore new line and add the remaining string , args = "\n1,2"`, () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should return 3, for args = //;\n1;2", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
