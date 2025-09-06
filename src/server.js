import express from 'express';
import configviewEngine from './config/viewEngine';
require('dotenv').config();

const app = express();
const port = process.env.port || 8081

configviewEngine(app);

app.get('/', (req, res) => {
    res.render('test/index.ejs');
})
app.get('/about', (req, res) => {
    res.send(`I'm Eric!`)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})