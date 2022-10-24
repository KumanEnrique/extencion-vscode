const vscode = require('vscode');
const repetirTexto = require('./commands/repetirTexto/index')
const folders = require('./commands/folders/index');
const folderStruct = require('./commands/folderStruct');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "my-first-extension" is now active!');

	const commands = [
		vscode.commands.registerCommand('my-first-extension.repetirtexto',repetirTexto),
		vscode.commands.registerCommand('my-first-extension.folders',folders),
		vscode.commands.registerCommand('my-first-extension.folderStruct',folderStruct)
	]
	context.subscriptions.push(...commands);
	// let disposable = vscode.commands.registerCommand('my-first-extension.mvvmFolderGenerate', (res) => {
	// 	console.log(res.fsPath)
	// 	vscode.window.showInformationMessage(res.fsPath);
	// 	fs.mkdirSync(res.fsPath + '/model')
	// 	fs.mkdirSync(res.fsPath + '/modelview')
	// 	fs.mkdirSync(res.fsPath + '/view')
	// });
	// context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
