const express = require('express');
const path = require('path');
// const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "");

const app = express();



app.use(express.static(initial_path));
// app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/essai', (req, res) => {
  res.sendFile(path.join(initial_path, "essai.html"));
})

const port = 3004;
const ipAddress = "192.168.1.106";

// const Port = port.process.env.PORT || 3000;
// const Port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Le serveur écoute sur ${ipAddress}:${port}.....`);
});
