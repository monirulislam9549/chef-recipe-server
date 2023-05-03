const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

const recipe = require('./data/chefs.json')

app.get('/', (req, res) => {
    res.send('recipe is running')
})

app.get('/recipe', (req, res) => {
    res.send(recipe)
})

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedRecipeDetails = recipe.find(r => r.id == id)
    res.send(selectedRecipeDetails)
    // console.log(selectedRecipeDetails);
})


app.listen(port, () => {
    console.log(`recipe api is running on port: ${port}`);
})