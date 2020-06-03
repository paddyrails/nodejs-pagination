const express = require('express')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const cors =  require('cors')
const pdfTemplate = require('./documents')

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//POST -- pdf generation and fetching of the data
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {})
        .toFile('result.pdf', (err) => {
            if(err) res.send(Promise.reject());
        })

        res.send(Promise.resolve());
});

//GET -- file t0 client
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log("listening on port 5000"));