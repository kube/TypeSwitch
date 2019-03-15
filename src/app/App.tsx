
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from "react";
import MonacoEditor from "react-monaco-editor";

export function App() {
  return (
    <div>
      <MonacoEditor
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
}
