
import { MongoClient, ObjectId } from "mongodb"


const client = new MongoClient("mongodb://127.0.0.1:27017")


async function traerPeces(filter) {
    return client.connect()
    
.then(async function () {
    const db = client.db("biufort") 
    return db.collection("Peces").find(filter).toArray()
    
})
}


async function guardarPez(pez) {
   const newPez ={...pez}
    return client.connect()     
        .then(function() {
         
        return client.db('biufort').collection('Peces').insertOne(newPez)
        })
        .then(function (result) {
            return newPez
        })

}

async function traerPezPorID(id) {
    return client.connect()
        .then(function () {
            const db = client.db('biufort')
            return db.collection('Peces').findOne({ _id: new ObjectId(id) })
        })

}


async function editarPez(id , pez) {
    return client.connect()
        .then(function () {
        return client.db('biufort').collection('Peces').updateOne({_id: new ObjectId(id)} , {$set: pez})
        })
       
}


async function eliminarPez(id) {
    return client.connect()
        .then(function () {
            return client.db('biufort').collection('Peces').deleteOne({ _id: new ObjectId(id) })
        })
        .then(function () {
            return true
        })

}

export {
    traerPeces, 
    guardarPez,
    traerPezPorID,
    editarPez,  
    eliminarPez,
}