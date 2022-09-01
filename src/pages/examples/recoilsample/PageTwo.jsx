import React from "react";

import { selector, useRecoilState, useRecoilValue } from "recoil";
import { exampleState } from "../../../Atom";

export default function PageTwo() {
  // There is two way to consume

  // First, Use Recoil State (More Simple)
  const [text] = useRecoilState(exampleState);

  // Second, Derived State
  const getTextLength = selector({
    key: "counterSelector1", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(exampleState);
      return text.length;
    },
  });

  const textLength = useRecoilValue(getTextLength);

  return (
    <>
      <h1>using derived state or selector</h1>
      Text Length: {textLength}
      <div>---</div>
      <h1>using use recoil state (more simple)</h1>
      Text: {text}
    </>
  );
}
