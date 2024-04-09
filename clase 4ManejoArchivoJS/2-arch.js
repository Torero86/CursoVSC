const fs = require("fs")

// los callbacks: el primer argumento es el error! 

//ESCRIBIR UN ARCHIVO

// fs.writeFile("./asinc-cb.txt","esto es un contenido", "utf-8", (error)=>{
//     if (error) return console.log(error)
// fs.appendFile("./asinc-cb.txt","\nesto es un agregado", "utf-8", (err)=>{
//     if(err) return console.log(err)
//     console.log("listo")
// })
// } )//asincronico!!

//  console.log("hola")

// AGREGAR

// fs.appendFile("./data.txt","\nesto es un agregado", "utf-8", (err)=>{
//     if(err) return console.log(err)
//     console.log("listo")
// })

//LEER UN ARCHIVO

// let contenido = null
// fs.readFile("./data.txt", "utf-8", (error, contenidoDataFile)=>{
//     if(error) return console.log(error.message)
//     contenido = contenidoDataFile
// console.log("contenido: ", contenido)
// })

//ELIMINAR

fs.unlink("./data.txt", (error)=>{
    if(error)return console.log(error)
    console.log("archivo eliminado")
})