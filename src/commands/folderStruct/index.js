const vscode = require('vscode');
const fs = require('fs')
const path = require('path')
module.exports = async function(res){
    const userFolder = await vscode.window.showInputBox({placeHolder:"coloca el nombre de carpeta raiz (si presionas enter es carpeta raiz)"})
    const userPath = res.fsPath
    const folders = ["config","controllers","libs","models","views","views/partials"]
    const files = [".htaccess","index.php","README.md",".gitignore","config/autoload.php","config/request.php","config/router.php","libs/Controller.php","libs/Model.php","libs/Database.php","libs/View.php","views/partials/header.php","views/partials/footer.php"]
    let dir = path.join(userPath,userFolder);
    if(userFolder == ""){
        dir = userPath
        folders.forEach(folder => {
            fs.mkdirSync(`${dir}/${folder}`)
        })
        const data = "";
        files.forEach(file =>{
            fs.writeFileSync(`${dir}/${file}`,data)
        })
        
        vscode.window.showInformationMessage(`creado con exito!!! en la carpeta raiz`)
        return
    }
    // if(fs.existsSync(dir)){
    //     vscode.window.showErrorMessage('no se puede continuar porque la carpeta existe')
    //     return;
    // }
    fs.mkdirSync(dir)
    folders.forEach(folder => {
        fs.mkdirSync(`${dir}/${folder}`)
    })
    const data = "";
    files.forEach(file =>{
        fs.writeFileSync(`${dir}/${file}`,data)
    })
    
    vscode.window.showInformationMessage(`creado con exito!!! en la carpeta raiz`)
}