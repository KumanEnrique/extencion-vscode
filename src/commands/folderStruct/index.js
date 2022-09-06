// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs')
const path = require('path')
module.exports = async function () {
    const userFolder = await vscode.window.showInputBox({placeHolder:"coloca tu nombre de carpeta raiz"})
    const userPath = await vscode.window.showInputBox({placeHolder:"copia y pega la direccion raiz"})
    if(!userFolder){
        vscode.window.showErrorMessage('El nombre es requerido')
        return
    }
    const dir = path.join(userPath,userFolder);
    console.log(dir)
    if(fs.existsSync(dir)){
        vscode.window.showErrorMessage('no se puede continuar porque la carpeta existe')
        return;
    }

    fs.mkdirSync(dir)
    fs.mkdirSync(dir + "/config")
    fs.mkdirSync(dir + "/controllers")
    fs.mkdirSync(dir + "/libs")
    fs.mkdirSync(dir + "/models")
    fs.mkdirSync(dir + "/views")
    fs.mkdirSync(dir + "/views/partials")

    const data = `export default {}
    php
    php`
    fs.writeFileSync(dir + "/.htaccess",data)
    fs.writeFileSync(dir + "/index.php",data)
    fs.writeFileSync(dir + "/README.md",data)
    fs.writeFileSync(dir + "/.gitignore",data)
    fs.writeFileSync(dir + "/config/autoload.php",data)
    fs.writeFileSync(dir + "/config/request.php",data)
    fs.writeFileSync(dir + "/config/router.php",data)
    fs.writeFileSync(dir + "/controllers/index.php",data)
    fs.writeFileSync(dir + "/libs/Controller.php",data)
    fs.writeFileSync(dir + "/libs/View.php",data)
    fs.writeFileSync(dir + "/libs/Database.php",data)
    fs.writeFileSync(dir + "/libs/Model.php",data)
    fs.writeFileSync(dir + "/views/index.php",data)
    fs.writeFileSync(dir + "/views/partials/header.php",data)
    fs.writeFileSync(dir + "/views/partials/footer.php",data)
    fs.writeFileSync(dir + "/models/index.php",data)

    vscode.window.showInformationMessage(`creado con exito!!! ${userFolder}`)
}