const express = require('express')
const router = express.Router()
const app = express()

const host = 'localhost'
const port = 8000

app.use(express.static('public'))

app.use(express.json())


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


router.post('/', function(req, res){
    console.log('Hola')
    console.log(req.body)
    res.send("recieved your request!")
 });

app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`)
})
  