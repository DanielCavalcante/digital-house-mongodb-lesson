const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const foodRoutes = require('./routes/foodRoutes')

app.use(express.json());

mongoose.connect(
"mongodb+srv://xuxinha:xuxinha123@cluster0.0p2mm.mongodb.net/test",
    { useNewUrlParser: true,  useUnifiedTopology: true }
);

app.get('/', (req, res) => {
    res.send('Digital House MongoDB lesson')
})

app.use(foodRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})



