import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const getGridColumns = (children, disableMultiCols = false) => {
  const count = children?.length || 0;

  if (count > 4) {
    return disableMultiCols
      ? "grid-cols-1"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_35%]";
  }

  if (count === 2) {
    return disableMultiCols
      ? "grid-cols-1"
      : "grid-cols-1 sm:grid-cols-[30%_30%]";
  }

  return "grid-cols-1";
};

export default function ChkEditorDefault({ content = {} }) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <div className="text-sm-paragraph pb-2">{children}</div>
        ),
        list: ({ children }) => (
          <ul
            className={`grid gap-x-2 list-none ${getGridColumns(children)} justify-start`}
          >
            {children}
          </ul>
        ),
        "list-item": ({ children }) => (
          <li className={`py-1 text-paragraph list-none`}>{children}</li>
        ),
      }}
    />
  );
}
