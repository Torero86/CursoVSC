

// setTimeout(() => {
//     //acciones
//     console.log("segunda accion")
// }, "");

// setInterval(() => {
//     console.log("2 accion")
// }, 2000);

//EJEMPLO DE ASINCRONISMO CON setInterval
// el callback como forma de implementar un cierto asincronismo y despues aparecio
//un objeto llamado Promise
let contando = ()=>{
    let contador = 1
    console.log("2 accion")
    let timer = setInterval(() => {
        
        console.log(contador++)
        if(contador>5){
        clearInterval(timer)
    } 
    }, 1000);
   
}
console.log("Primera accion")
contando()
console.log("Tercera accion")
