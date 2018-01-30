const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3312, () => console.log('Example app listening on port 3312!'))