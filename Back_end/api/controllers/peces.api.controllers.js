import * as PecesServices from "../../services/peces.services.js"

//traer todos o filtrar por nombre
function findAll(req, res) {
    const filter = {   
    }

   if (req.query.nombres) {
    filter.nombres = req.query.nombres
    }
    
    PecesServices.traerPeces(filter)
        .then(function (peces) {
           
            res.status(200).json(peces)
        })
}

//agregar uno nuevo
function create(req, res) {
    const pez = {
        nombres: req.body.nombres,
        descripcion: req.body.descripcion,
        img: req.body.img,
        alt_img: req.body.alt_img,
       
    }
    PecesServices.guardarPez(pez)
        .then(function (nuevoPez) {
            res.status(201).json(nuevoPez)
        })
}


//Obtener un pez en particular
function findById(req, res) {
    const id = req.params.id

    PecesServices.traerPezPorID(id)
        .then(function (pez) {
            if (pez) {
                res.status(200).json(pez)
            } else {
                res.status(404).json({ message: "Pez no encontrado" })
            }
        })
}


//editar 
function editById(req, res) {
    const id = req.params.id 
    const pez = {}

    if (req.body.nombres) {
        pez.nombres = req.body.nombres
    }

    if (req.body.descripcion) {
        pez.descripcion = req.body.descripcion
    }

    if (req.body.img) {
        pez.img = req.body.img
    }
    
    if (req.body.alt_img) {
        pez.alt_img = req.body.alt_img
    }
     
    PecesServices.editarPez(id, pez)
        .then(function (pez) {
            if (pez) {
                res.status(200).json({ message: "Pez editado con exito" })
            } else {
                res.status(404).json({ message: "Pez no encontrado" })
            }
        })
}

//eliminar 
function deleteById(req, res) {
    const id = req.params.id

    PecesServices.eliminarPez(id)
        .then(function (pez) {
            if (pez) {
                res.status(200).json({ message: "Pez eliminado con exito" })
            } else {
                res.status(404).json({ message: "Pez no encontrado" })
            }
        })
        
}


export {
    findAll, 
    create,
    findById,
    editById,
    deleteById,
   
}