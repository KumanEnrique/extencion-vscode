// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
module.exports = async function () {
    const vi = await vscode.window.showQuickPick(["sasa","333"],{canPickMany:false,placeHolder:"coloca tu nombre"})
    console.log(vi)
    const userFolder = await vscode.window.showInputBox({placeHolder:"coloca tu nombre"})
    vscode.window.showInformationMessage(`creado con exito!!! ${userFolder}`)

}