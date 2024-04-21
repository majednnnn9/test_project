const express = require("express")
const app = express()


app.get('/user', (req, res) => {
    res.json({
        "message": "majed",
        "data": [
            {
                "title": "book 1",
                "description": "description 1"
            },
            {
                "title": "book 2",
                "description": "description 2"
            }
        ]
    })
})


const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => {
    console.log("runing is server is port " + PORT)
})