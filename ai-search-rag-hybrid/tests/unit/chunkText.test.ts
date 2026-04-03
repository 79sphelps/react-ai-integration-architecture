import { chunkText } from "../../src/utils/chunkText";

test("splits text into chunks", () => {
  const chunks = chunkText("Sentence one. Sentence two.");
  expect(chunks.length).toBeGreaterThan(0);
});
