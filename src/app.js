// const http = require('http');
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import productRoute from './routes/product'
import userRoute from './routes/user'
import categoryRoute from './routes/category'
// import cartRoute from './routes/cart'

import morgan from 'morgan';

// import swaggerUI from 'swagger-ui-express';
// import YAML from 'yamljs';

const app = express();

// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.use("/api", productRoute)
// app.use("/api", cartRoute)
app.use("/api", userRoute)
app.use("/api", categoryRoute)
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs))

// connect to db
mongoose.connect("mongodb://127.0.0.1:27017/we16310")
    .then(() => console.log("Ket noi DB thanh cong"))
    .catch((error) => console.log(error))
 
export const viteNodeApp = app;