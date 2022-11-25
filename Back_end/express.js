
import express from "express";
import cors from 'cors'
import PecesApiRoute from './api/routes/peces.api.routes.js'


const app = express();
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use("/", express.static("public"))
app.use(express.static('public'));
app.use(express.json());
app.use(cors())



app.use(PecesApiRoute)


// PUERTO ----------------------------//
app.listen(2022, function() {
    console.log("Arrancó el servidor")
    console.log('http://localhost:2022')
})