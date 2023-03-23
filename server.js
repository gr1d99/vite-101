import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()
const port = process.env.PORT || 8080;

const indexFile = path.join(__dirname, 'dist/index.html')
const staticDir = path.join(__dirname, 'dist')

console.debug(staticDir)

app.use(express.static(staticDir))

app.get('/', (req, res) => {
    res.sendFile(indexFile)
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
