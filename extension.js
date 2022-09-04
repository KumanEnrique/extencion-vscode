// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "my-first-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('my-first-extension.helloWorld', async function () {
		vscode.window.showInformationMessage('hola mundo desde  my-first-extension!');
		let userName = await vscode.window.showInputBox({placeHolder:"coloca tu nombre"})
		vscode.window.showInformationMessage(`${userName}`);
	});
	context.subscriptions.push(disposable);
	
	// let disposable2 = vscode.commands.registerCommand('my-first-extension.comoestas', async function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	// let userName = await vscode.window.showInputBox({placeHolder:"coloca tu nombre"})
	// 	let activeEditor = vscode.window.activeTextEditor
	// 	console.log(activeEditor )
	// 	// vscode.window.showInformationMessage(`${activeEditor.document.getText()}`);
	// });

	// context.subscriptions.push(disposable2);
	let disposable2 = vscode.commands.registerCommand('my-first-extension.repetirtexto', async function () {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const userText = await vscode.window.showInputBox({placeHolder:"Coloca el texto a repetir:"})
			const rep = await vscode.window.showInputBox({placeHolder:"Coloca tus repeticiones:"})
			const repeticiones = Number(rep)
			const selection = editor.selection;
			const arreglo = []
			for(let i = 0;i < repeticiones;i++){
				arreglo.push(`${userText}${i}`)
			}
			const arreglo2 = arreglo.join()
			editor.edit(editBuilder => {
				editBuilder.replace(selection, arreglo2);
			});
		}else{
			vscode.window.showErrorMessage("debes tener un editor activo")
		}
	});
	context.subscriptions.push(disposable2);

	let disposable3 = vscode.commands.registerCommand('my-first-extension.folderStruct', async function () {
		vscode.window.showInformationMessage('hola mundo desde  my-first-extension!');
		let userName = await vscode.window.showInputBox({placeHolder:"coloca tu nombre"})
		vscode.window.showInformationMessage(`${userName}`);
	});

	context.subscriptions.push(disposable3);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
