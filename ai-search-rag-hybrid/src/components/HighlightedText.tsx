export function HighlightedText({
  text,
  query,
}: {
  text: string;
  query: string;
}) {
  const terms = query.split(/\s+/);

  let highlighted = text;

  terms.forEach((term) => {
    const regex = new RegExp(`(${term})`, "gi");
    highlighted = highlighted.replace(regex, "<mark>$1</mark>");
  });

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
}
