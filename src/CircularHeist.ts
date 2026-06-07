export function circularHeist(houses: number[]): number {
  const n = houses.length;

  if (n === 0) return 0;
  if (n === 1) return houses[0];

  function robLinear(nums: number[]): number {
    let prev1 = 0;
    let prev2 = 0;

    for (const num of nums) {
      const temp = Math.max(prev1, prev2 + num);
      prev2 = prev1;
      prev1 = temp;
    }

    return prev1;
  }

  return Math.max(
    robLinear(houses.slice(0, n - 1)),
    robLinear(houses.slice(1)),
  );
}
