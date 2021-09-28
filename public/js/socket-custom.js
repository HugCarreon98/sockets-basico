
var socket = io();

socket.on("connect", function(){
    console.log("Conectado al servidor");
})

socket.on("disconnect", function(){
    console.log("Desconectado al servidor");
})

socket.emit("enviarMensaje",{
    usuario: "Hugo",
    mensaje: "Mensaje enviado"
}, function(){
    console.log("Se ha enviado el mensaje!")
})

/*socket.emit("enviarMensaje","123", function(){
    console.log("Se ha enviado el mensaje!")
})*/

socket.on("enviarMensaje", function(mensaje){
    console.log(`He recibido un mensaje de confirmación del servidor`)
})