// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
module.exports = async function () {
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
}