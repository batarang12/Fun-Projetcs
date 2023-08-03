const express = require('express');
const  bodyparser = require('body-parser');
const cors = require('cors');
const { default: mongoose } = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyparser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB connection successful.");
})




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}
)