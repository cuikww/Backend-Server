require('dotenv').config();
const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser:true, 
        useUnifiedTopology:true, // Mengubah opsi ini dari useFieldTopology menjadi useUnifiedTopology
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => console.log(err)); 
