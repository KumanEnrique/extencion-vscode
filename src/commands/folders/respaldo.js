// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs')
const path = require('path')
module.exports = async function (res) {
    const userFolder = await vscode.window.showInputBox({placeHolder:"coloca el nombre de carpeta raiz (puedes omitir)"})
    const userPath = res.fsPath
    if(userFolder){
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
    }
    
    vscode.window.showInformationMessage(`creo que no querias crear carpetas`)

    // if(!userFolder){
    //     vscode.window.showErrorMessage('El nombre es requerido')
    //     return
    // }
    // const dir = path.join(userPath,userFolder);
    // console.log(dir)
    // if(fs.existsSync(dir)){
    //     vscode.window.showErrorMessage('no se puede continuar porque la carpeta existe')
    //     return;
    // }

    // fs.mkdirSync(dir)
    // fs.mkdirSync(dir + "/config")
    // fs.mkdirSync(dir + "/controllers")
    // fs.mkdirSync(dir + "/libs")
    // fs.mkdirSync(dir + "/models")
    // fs.mkdirSync(dir + "/views")
    // fs.mkdirSync(dir + "/views/partials")

    // const data = `export default {}
    // php
    // php`
    // fs.writeFileSync(dir + "/.htaccess",data)
    // fs.writeFileSync(dir + "/index.php",data)
    // fs.writeFileSync(dir + "/README.md",data)
    // fs.writeFileSync(dir + "/.gitignore",data)
    // fs.writeFileSync(dir + "/config/autoload.php",data)
    // fs.writeFileSync(dir + "/config/request.php",data)
    // fs.writeFileSync(dir + "/config/router.php",data)
    // fs.writeFileSync(dir + "/controllers/index.php",data)
    // fs.writeFileSync(dir + "/libs/Controller.php",data)
    // fs.writeFileSync(dir + "/libs/View.php",data)
    // fs.writeFileSync(dir + "/libs/Database.php",data)
    // fs.writeFileSync(dir + "/libs/Model.php",data)
    // fs.writeFileSync(dir + "/views/index.php",data)
    // fs.writeFileSync(dir + "/views/partials/header.php",data)
    // fs.writeFileSync(dir + "/views/partials/footer.php",data)
    // fs.writeFileSync(dir + "/models/index.php",data)

}