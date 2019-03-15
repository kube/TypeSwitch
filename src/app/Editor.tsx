
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from "react";
import { style, classes } from "typestyle";
import { px } from "csx";
import MonacoEditor from "react-monaco-editor";

import { FONTS } from "./Palette";

const HEADER_HEIGHT = 38;

const EditorStyle = style({
  $nest: {
    ".top-bar": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: px(HEADER_HEIGHT),
      padding: px(11),
      paddingLeft: px(16),
      fontSize: px(12),
      textTransform: "uppercase",
      fontWeight: 300,
      letterSpacing: px(0.7),
      opacity: 0.4
    },
    ".monaco-editor-wrapper": {
      position: "absolute",
      top: px(HEADER_HEIGHT),
      left: 0,
      right: 0,
      bottom: 0,
      "-webkit-user-select": "text"
    }
  }
});

type EditorProps = {
  className?: string;
  value: string;
  title: string;
  onChange?: (source: string) => void;
  readOnly?: true;
};

export function Editor(props: EditorProps) {
  return (
    <div className={classes(EditorStyle, props.className)}>
      <div className="top-bar">{props.title}</div>

      <div className="monaco-editor-wrapper">
        <MonacoEditor
          theme="vs-dark"
          value={props.value}
          onChange={props.onChange}
          editorDidMount={editor => {
            setTimeout(() => editor.layout(), 0);
            window.addEventListener("resize", () =>
              editor.layout()
            );
          }}
          options={{
            fontFamily: FONTS.CODE,
            readOnly: props.readOnly,
            minimap: { enabled: false },
            contextmenu: false
          }}
        />
      </div>
    </div>
  );
}
