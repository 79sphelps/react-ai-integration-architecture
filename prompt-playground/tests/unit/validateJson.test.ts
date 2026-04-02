import { validateJson } from "../../src/utils/validateJson";

test("valid JSON passes", () => {
  const result = validateJson('{"a":1}', { a: true });
  expect(result.valid).toBe(true);
});

test("missing key fails", () => {
  const result = validateJson('{"a":1}', { b: true });
  expect(result.valid).toBe(false);
});
