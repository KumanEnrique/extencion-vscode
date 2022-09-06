const vscode = require('vscode');
const helloWorld = require('./commands/helloWorld/index')
const repetirTexto = require('./commands/repetirTexto/index')
const folderStruct = require('./commands/folderStruct/index')
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "my-first-extension" is now active!');

	const commands = [
		vscode.commands.registerCommand('my-first-extension.helloWorld',helloWorld),
		vscode.commands.registerCommand('my-first-extension.repetirtexto',repetirTexto),
		vscode.commands.registerCommand('my-first-extension.folderStruct',folderStruct)
	]
	context.subscriptions.push(...commands);
	// const disposable = vscode.commands.registerCommand(
	// 	'my-first-extension.testCarpet',
	// 	()=>{
	// 		return testFolder(context);
	// 	}
	// )
	// context.subscriptions.push(disposable);
	

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
