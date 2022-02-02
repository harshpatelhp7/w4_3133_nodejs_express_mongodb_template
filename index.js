const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect(
  "mongodb+srv://harshpatelhp7:DOGEtomoon2021@comp3123.h9dis.mongodb.net/comp3123?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(employeeRouter);

app.listen(8081, () => { console.log('Server is running...') });