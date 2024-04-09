const fs = require("fs")

// fs.promises.writeFile("./data.txt", "contenido", "utf-8")
//     .then(()=> console.log("archivo creado"))
//     .catch(error=>console.log(error))

    // const writeFileFunction = async () =>{
    //     try{
    //         await fs.promises.writeFile("./data.txt", "contenido", "utf-8")
    //         await fs.promises.appendFile("./data.txt", "\nagregado contenido", "utf-8")

    //         const contenido = await fs.promises.readFile("./data.txt", "utf-8")

    //         await fs.promises.unlink("./data.json")

    //         console.log(contenido)
    //     } catch(error){
    //         console.log(error.message)
    //     }
    // }


    
    const writeFileFunction = async () =>{
        try{
            const objArray = [{
                title: "producto example",
                price: 1500,
                category: "gorras"
            }]
            await fs.promises.writeFile("./data.json", JSON.stringify(objArray, null, "\t"), "utf-8")
            await fs.promises.appendFile("./data.txt", "\nagregado contenido", "utf-8")

            const contenido = await fs.promises.readFile("./data.json", "utf-8")
            const contenidoParseado = JSON.parse(contenido)

            console.log(contenidoParseado)
        } catch(error){
            console.log(error.message)
        }
    }
    writeFileFunction()