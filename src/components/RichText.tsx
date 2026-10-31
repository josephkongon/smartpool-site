import { Fragment } from "react";

/** Renders a dictionary string where `**text**` marks bold runs. */
export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>))}
    </>
  );
}
