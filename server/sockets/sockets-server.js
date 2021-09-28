const { io } = require("../server");

io.on("connection", (cliente) => {
  console.log("Se ha conectado un cliente");

  cliente.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  cliente.on("enviarMensaje", (data, callback) => {
    console.log(data);

    cliente.broadcast.emit(`enviarMensaje`, data)
    //cliente.emit(`enviarMensaje`, data)
    //callback();
  });

  /*cliente.emit("enviarMensaje", {
    usuario: "administrador",
    mensaje: "bienvienido al sitio web",
  });*/
});
