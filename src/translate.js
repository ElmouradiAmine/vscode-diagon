const diagon = require("@elmouradiamine/diagon");
const vscode = require("vscode");
const editor = vscode.window.activeTextEditor;

async function translate() {
  const text = editor.document.getText(editor.selection);

  const options = [
    "Math",
    "Sequence",
    "Tree",
    "Table",
    "Grammar",
    "GraphDAG",
    "GraphPlanar",
    "Flowchart",
  ];

  const translator = await vscode.window.showQuickPick(options, {
    canPickMany: false,
  });

  if (translator) {
      const translation = await diagon.translate(translator, text.trim());
      editor.edit((text) =>
        text.replace(editor.selection, translation.trim())
      );
  }
}

module.exports = translate;