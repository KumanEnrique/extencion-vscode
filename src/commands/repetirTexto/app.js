module.exports = async function(editor,textoUsuario,rep,regex1){
    //buscador de $ en inicio de palabra ejemplo: $sa$ff$
    let array1;
    const repeticiones = Number(rep)
    const selection = editor.selection;
    const contenedorIndices = []
    const contenedorPalabras = []

    while ((array1 = regex1.exec(textoUsuario)) !== null) {
        console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
        contenedorIndices.push(array1.index)
    }
    let fragmento = ""
    let repeticion = 1
    for (let i = 1; i <= repeticiones; i++) {
        for (let j = 1; j <= contenedorIndices.length; j++) {
            fragmento += textoUsuario.slice(contenedorIndices[j - 1], contenedorIndices[j - 1] + 1) + `${repeticion}`
            fragmento += textoUsuario.slice(contenedorIndices[j - 1] + 1, contenedorIndices[j])
            repeticion++
        }
        const palabraRepetida = `"${fragmento}"`
        contenedorPalabras.push(palabraRepetida)
        fragmento = ""
    }
    console.log(contenedorPalabras)
    console.log(contenedorIndices)
    console.log({ textoUsuario })
    const arreglo2 = contenedorPalabras.join()
    editor.edit(editBuilder => {
        editBuilder.replace(selection, arreglo2);
    });
}

