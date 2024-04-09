import express from "express"
import ProductManager from "../clase 4ManejoArchivoJS/entregableManejoDeArchivos.js"


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/", (req,res)=>{
    res.status(200).send("<h1>PRODUCTS </h1>")
})

//endpoints users
// let users = []



const newProducts = new ProductManager

app.get('/products', async (req, res) => {
    const {limit} = req.query
    const response = await newProducts.getProducts()

    if(!limit) return res.send(response)
    const prodFound = response.filter (p => p.id === parseInt(limit))
    res.send(prodFound)
})

app.get ('/products/:pid', async (req,res) => {
    const {pid} = req.params

    const productFound = await newProducts.getProductById(parseInt(pid))
    if(productFound) return res.send(productFound) 

     return res.send('el producto no fue encontrado')
})

app.listen(8080, error =>{
    if (error) console.log(error)
    console.log("server escuchando en el puerto 8080")
} )


// //traeme todos usuarios/productos
// app.get("/api/users", (req,res)=>{
//     res.send(users)
// })
// //creame un usuario/producto
// app.post("/api/users", (req,res)=>{
//     console.log(req.body)
//     const {first_name, last_name, email, password} = req.body
//     // console.log(first_name,last_name,email,password)
//     if(!email || !password) return res.send({status:"error", error:"faltan campos"})

//     const newUser = {
//         id: users.length +1,
//         first_name,
//         last_name,
//         email,
//         password
//     }

//     users.push(newUser)
//     res.status(200).send({status: "success", payload:newUser})
// })
// //traeme un usuario concreto
// app.get("/api/users/:uid", (req,res)=>{
//     const {uid} = req.params
//     const userFound = users.find(user =>user.id === parseInt(uid))
// //agregar validacion

//     res.send({status:"success", payload:userFound})

// })
// //actualizame un usuario/producto
// app.put("/api/users/:uid", (req,res)=>{
//     const {uid} = req.params
//     const userToUpdate = req.body

//     const userIndex = users.findIndex(user => user.id === parseInt(uid))
//     if(userIndex === -1) return res.status(404).send({status:"error", error:"user not found"})

//     users[userIndex] = { id: parseInt(uid), ...userToUpdate}

//     res.send({status:"success", payload: userToUpdate})

// })
// //borrame un usuario/producto
// app.delete("/api/users/:uid", (req,res)=>{
//     const {uid} = req.params
    
//     const usersResult = users.filter(user => user.id !== parseInt(uid) )


//     res.send({status:"success", payload:usersResult})

// })


// app.listen(8080, error =>{
//     if (error) console.log(error)
//     console.log("server escuchando en el puerto 8080")
// } )


