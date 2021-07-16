const getUsuarioById = (id, callback) => {

    const usuario = {
        id,
        nombre: 'Nata'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500)

}

getUsuarioById(25, (usuario) => console.log(usuario))