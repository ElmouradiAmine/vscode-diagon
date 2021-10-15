const vscode = require("vscode");
const translate = require("./translate");

async function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "vscode-diagon.diagonTranslate",
    () => {
      translate();
    }
  );

  context.subscriptions.push(disposable);
}


module.exports = {
  activate,
};
