import React from "react";

import { useRecoilState } from "recoil";
import { exampleState } from "../../../Atom";

export default function PageOne() {
  const [text, setText] = useRecoilState(exampleState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
