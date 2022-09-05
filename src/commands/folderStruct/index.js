// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs')
module.exports = async function (params) {
    const userFolder = await vscode.window.showInputBox({placeHolder:"coloca tu nombre de carpeta raiz"})
    if(!userFolder){
        vscode.window.showErrorMessage('El nombre es requerido')
        return
    }

    // const dir = params.path + '/' + userFolder;
    console.log(__dirname)
    // if(fs.existsSync(dir)){
    //     vscode.window.showErrorMessage('no se puede continuar porque la carpeta existe')
    //     return;
    // }

    // fs.mkdirSync(dir)
    // fs.mkdirSync(dir + "/create")
    // fs.mkdirSync(dir + "/read")
    // fs.mkdirSync(dir + "/delate")
    // fs.mkdirSync(dir + "/update")

    // const data = `export default {}`
    // fs.writeFileSync(dir + "/index.js",data)
    // fs.writeFileSync(dir + "/create/index.js",data)
    // fs.writeFileSync(dir + "/read/index.js",data)
    // fs.writeFileSync(dir + "/delate/index.js",data)
    // fs.writeFileSync(dir + "/update/index.js",data)

    vscode.window.showInformationMessage(`creado con exito!!! ${userFolder}`)
    vscode.window.showInformationMessage(` ${__dirname}`)
    return
}