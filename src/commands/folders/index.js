const vscode = require('vscode');
const fs = require('fs')
const path = require('path')
module.exports = async function (res) {
    const userFolder = await vscode.window.showInputBox({placeHolder:"coloca el nombre de carpeta raiz (si presionas enter es carpeta raiz)"})
    const userPath = res.fsPath
    if(userFolder){
        let foldersName = []
        while(true){
            const response = await vscode.window.showQuickPick(["si","no"],{canPickMany:false,placeHolder:"quieres crear otra carpeta?"})
            if(response == "no"){
                console.log("adios")
                break
            }
            const folder = await vscode.window.showInputBox({placeHolder:"coloca el nombre de carpeta"})
            if(folder){
                foldersName.push(folder)
            }
        }
        const dir = path.join(userPath,userFolder);
        fs.mkdirSync(dir)
        foldersName.forEach(element => {
            fs.mkdirSync(`${dir}/${element}`)
        })
        vscode.window.showInformationMessage(`creado con exito!!! carpeta contenedora con nombre ${userFolder}`)
        return
    }
    let foldersName = []
    while(true){
        const response = await vscode.window.showQuickPick(["si","no"],{canPickMany:false,placeHolder:"quieres crear otra carpeta?"})
        if(response == "no"){
            console.log("adios")
            break
        }
        const folder = await vscode.window.showInputBox({placeHolder:"coloca el nombre de la carpeta"})
        if(folder){
            foldersName.push(folder)
        }
    }
    foldersName.forEach(element => {
        fs.mkdirSync(`${userPath}/${element}`)
    })
    vscode.window.showInformationMessage(`creado con exito!!! en la carpeta raiz`)

    // if(!userFolder){
    //     vscode.window.showErrorMessage('El nombre es requerido')
    //     return
    // }
    // const dir = path.join(userPath,userFolder);
    // if(fs.existsSync(dir)){
    //     vscode.window.showErrorMessage('no se puede continuar porque la carpeta existe')
    //     return;
    // }
}