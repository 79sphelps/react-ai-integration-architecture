import { rankDocuments } from "../../src/utils/rankDocuments";

test("ranks by term frequency", () => {
  const docs = [
    { id: "1", title: "", content: "refund refund policy" },
    { id: "2", title: "", content: "shipping info" },
  ];

  const result = rankDocuments(docs as any, "refund");
  expect(result[0].score).toBeGreaterThan(result[1]?.score || 0);
});
