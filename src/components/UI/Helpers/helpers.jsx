import { Fragment } from "react";

export const HighlightText = ({
  text = "",
  highlightClassName = "text-primary",
  lineBreak = false,
}) => {
  const parts = text.split(/(\[.*?\])/g);

  return parts.map((part, index) => {
    if (part.toLowerCase() === "[br]") return <br key={index} />;

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

export function RenderText(text = "") {
  return text.split(/\s*\[br\]\s*/gi).map((part, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {part}
    </Fragment>
  ));
}
