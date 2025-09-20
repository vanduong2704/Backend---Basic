import express from 'express';
import configviewEngine from './config/viewEngine';
import initWebRoute from './route/web';
// import connection from './config/connectDB';
require('dotenv').config();

const app = express();
const port = process.env.port || 8081

//setup view engine
configviewEngine(app);

// init web route
initWebRoute(app);





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})