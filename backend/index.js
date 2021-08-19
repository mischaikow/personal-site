const express = require('express')
const Mailgun = require('mailgun-js')
const cors = require('cors')
require('dotenv').config()

const app = express()
const api_key = process.env.API_KEY
const domain = process.env.DOMAIN

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Backend is up')
})

app.get('/api/', (req, res) => {
    console.log('Backend is communicating')
})

app.post('/api/submit/contact', (req, res) => {
    console.log(req)

    const text =
        "From: " + req.body.email + "\n" +
        "Subject: " + req.body.subject + "\n\n" +
        req.body.text;

    const mailgun = new Mailgun({apiKey: api_key, domain: domain});

    const data = {
        from: 'mischaikow.com <postmaster@mischaikow.com>',
        to: 'Chris Mischaikow <mischaik@gmail.com>',
        subject: req.body.subject,
        text: text,
    }

    mailgun.messages().send(data, (err, body) => {
        if (err) {
            console.log("ERROR");
            console.log(err);
            res.json("So sorry, there was an error on our end!")
        } else {
            console.log(body);
            res.json("Message Sent")
        }
    })
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})