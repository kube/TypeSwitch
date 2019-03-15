
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

import { FlowVisitor } from "./FlowVisitor";

export function transformFlowSource(source: string) {
  const ast = parse(source, {
    plugins: ["flow", "classProperties"],
    sourceType: "module"
  });

  traverse(ast, FlowVisitor);
  const output = generate(ast).code;

  return output;
}
