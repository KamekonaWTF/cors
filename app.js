const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.use(cors())

const urlBase = `https://rickandmortyapi.com/api/character/`

app.get('/', (req, res) => {
    res.send('')
})

app.get('/character', async (req, res) => {
    try{
        const response = await axios.get(url)
        const characters = response.data.results 
        console.log(character)   
        
        res.json(characters)

    } catch (err) {
        res.status(500).json({error:'El servidor se ha estropeado'})
    }
})

app.get('/character/:name', async(req, res) => {
    const name = req.params.name
    const urlCharacter = `${urlBase}?name=${name}` 

    try {
        const response = await axios.get(urlCharacter)
        const {name, status, species, gender, origin: {name: originName}, image} = response.data.results[0]
        
        res.json({name, status, species, gender, origin: {name: originName}, image})

    } catch {
        res.status(500).json({error:'El servidor se ha estropeado'})
    }
})

app.listen(3000, ()=> {
    console.log('Express está escuchando en el puerto http://localhost:3000')
})

