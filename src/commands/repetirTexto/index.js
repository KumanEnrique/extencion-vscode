// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const INICIO = require('./app')
const ENTRE = require('./app2')
module.exports = async function () {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const textoUsuario = await vscode.window.showInputBox({ placeHolder: "Coloca el texto a repetir:" })
        const rep = await vscode.window.showInputBox({placeHolder:"Coloca tus repeticiones:"})
        const regex1 = /\$+/g
        console.log("antes de los 2 if")
        //todo: checar y cambiar los if para que validen primero si es verdadero el resultado del metodo exec
        if(regex1.exec(textoUsuario).index === 0){
            console.log("if 1")
            const textoUsuario2 = textoUsuario.slice()
            const regex2 = /\$+/g
            await INICIO(editor,textoUsuario2,rep,regex2)
            console.log("if 1")
        }
        const textoUsuario2 = textoUsuario.slice()
        const regex2 = /\$+/g
        if(regex2.exec(textoUsuario2).index > 0){
            console.log("dentro del if 2")
            const textoUsuario2 = textoUsuario.slice()
            const regex2 = /\$+/g
            await ENTRE(editor,textoUsuario2,rep,regex2);
            console.log("dentro del if 2")
        }
        console.log("fuera del if")

    }else{
        vscode.window.showErrorMessage("debes tener un editor activo")
    }
}