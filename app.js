const express = require('express')

//app
const app = express()

//port
const port = process.env.PORT || 10234

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})