
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React, { useState } from "react";
import { style } from "typestyle";
import { percent } from "csx";

import { Editor } from "./Editor";
import { transformFlowSource } from "@lib/transformSource";
import { FONTS, COLORS } from "./Palette";

const AppStyle = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  fontFamily: FONTS.UI,
  backgroundColor: COLORS.BACKGROUND,

  $nest: {
    ".left-editor": {
      position: "absolute",
      top: 0,
      left: 0,
      right: percent(50),
      bottom: 0
    },
    ".right-editor": {
      position: "absolute",
      top: 0,
      left: percent(50),
      right: 0,
      bottom: 0
    }
  }
});

export function App() {
  const [source, setSource] = useState("");
  const [output, setOutput] = useState("");

  function updateSource(source: string) {
    setSource(source);
    setOutput(transformFlowSource(source));
  }

  return (
    <div className={AppStyle}>
      <Editor
        title="Flow"
        className="left-editor"
        value={source}
        onChange={updateSource}
      />

      <Editor
        title="TypeScript"
        className="right-editor"
        readOnly
        value={output}
      />
    </div>
  );
}
