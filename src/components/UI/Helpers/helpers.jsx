export const HighlightText = ({
  text = "",
  highlightClassName = "text-primary",
  lineBreak = false,
}) => {
  const parts = text.split(/(\[.*?\])/g);

  return parts.map((part, index) => {
    const is_highlighted = part.startsWith("[") && part.endsWith("]");
    const value = is_highlighted ? part.slice(1, -1) : part;

    return is_highlighted ? (
      <span
        key={index}
        className={`${lineBreak ? "block" : ""} ${highlightClassName}`}
      >
        {value}
      </span>
    ) : (
      value
    );
  });
};
