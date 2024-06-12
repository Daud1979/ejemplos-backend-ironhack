const fs = require('fs');

// Fíjate que esta función de callback solo se utiliza para comprobar cómo ha ido la escritura, si ha ido bien, o mal
fs.writeFile("resultado.txt", "Tal cual lo que dice Zulema, se va a sobreescribir lo que hay en el fichero.", (err) => {
    if (err) {
        console.log("Ha ocurrido un error: ", err);
    } else {
        console.log("Fichero guardado con éxito.")
    }
})