const express = require("express");
const cors = require("cors")
const cookies = require("cookie-parser");
const port = 8000;
const app = express();


app.use(cors({
    credentials:true,
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(cookies());


require("./config/mongoose.config");
require("./routes/routes")(app);

app.listen(port, ()=>console.log(`Listening on port ${port}`))
