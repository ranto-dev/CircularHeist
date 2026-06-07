import { circularHeist } from "../src/CircularHeist";

describe("CircularHeist", () => {
  test("cas 1", () => {
    expect(circularHeist([5])).toBe(5);
  });

  test("cas 2", () => {
    expect(circularHeist([2, 3])).toBe(3);
  });

  test("cas 3", () => {
    expect(circularHeist([2, 7, 9])).toBe(9);
  });

  test("cas 4", () => {
    expect(circularHeist([1, 2, 3, 1])).toBe(4);
  });

  test("cas 5", () => {
    expect(circularHeist([2, 7, 9, 3, 1])).toBe(11);
  });

  test("cas 6", () => {
    expect(circularHeist([4, 10, 3, 1, 5])).toBe(15);
  });

  test("cas 7", () => {
    expect(circularHeist([9, 1, 9, 1, 9])).toBe(18);
  });

  test("cas 8", () => {
    expect(circularHeist([7, 7, 7, 7, 7, 7, 7])).toBe(21);
  });

  test("cas 9", () => {
    expect(circularHeist([10, 1, 1, 10])).toBe(11);
  });

  test("cas 10", () => {
    expect(circularHeist([100, 1, 1, 100, 1, 1, 100])).toBe(200);
  });
});
