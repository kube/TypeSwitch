
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import * as t from "@babel/types";
import { Visitor } from "@babel/traverse";

export const FlowVisitor: Visitor = {
  ImportDeclaration(path) {
    path.node.importKind = null;

    for (const specifier of path.node.specifiers) {
      if (specifier.type === "ImportSpecifier") {
        specifier.importKind = null;
      }
    }
  },

  ClassProperty(path) {
    path.node.typeAnnotation = null;
  },

  Class(path) {
    path.node.implements = null;
  },

  AssignmentPattern(path) {
    path.node.left.typeAnnotation = null;
  },

  Function(path) {
    for (const param of path.node.params) {
      switch (param.type) {
        case "AssignmentPattern":
          if (param.left.type === "Identifier") {
            param.left.optional = null;
          }

        case "ArrayPattern":
        case "Identifier":
        case "ObjectPattern":
        case "RestElement":
          param.typeAnnotation = null;
      }
    }
  },

  TypeCastExpression(path) {
    let node: t.Expression = path.node;

    while (t.isTypeCastExpression(node)) {
      node = node.expression;
    }

    path.replaceWith(node);
  },

  CallExpression(path) {
    path.node.typeArguments = null;
  },

  OptionalCallExpression(path) {
    path.node.typeArguments = null;
  },

  NewExpression(path) {
    path.node.typeArguments = null;
  }
};
