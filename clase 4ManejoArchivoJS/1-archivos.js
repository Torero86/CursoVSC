//FS (fileSystem). es un primer sistema para manejar archivos, que nos permite crear leer actualizar o eliminar un archivo
//sin tener q hacerlo nosotros desde cero. CRUD === ABM alta baja y modificar
//CRUD CREATE READ UPDATE DELETE
//fs es un objeto por eso puedo meter metodos
//import fs from "fs"
// forma de importar la libreria nativa de forma => type module import fs from "fs"(mas moderna)
//const fs = require("fs")
//const fs = require("fs") forma de importar la libreria nativa fs => type common

const fs = require("fs")

//manejo de archivo, usando fs de manera sincronica

// CREAR un archivo 

//fs.writeFileSync("./data.json", "esto es un contenido manejado\t por archivos", "utf-8" )

// console.log(fs.existsSync("./data.txt"))



// LEER un archivo. lo q lea lo guarde en una variable 



// if(fs.existsSync("./data.txt")){
//     const archivo = fs.readFileSync("./data.txt", "utf-8")
//     console.log(archivo)
// }else{
//     fs.writeFileSync("./data.txt", "esto es un contenido manejado\t por archivos", "utf-8" )
// }


//UPDATE AGREGAR CONTENIDO! si no existe el archivo lo crea!! si existe lo modifica!!!

// fs.appendFileSync("./data.txt", "contenido Nuevo", "utf-8")

//ELIMINAR!!

// fs.unlinkSync("./data.txt")

