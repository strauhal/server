const express = require('express')
const app = express()
const port = process.argv [2] ||80
// allows you to add a port number after the terminal command as an argument
// do the port thing

const www = express.static(`${__dirname}/www`)
// tick marks let you pass vars into the string
// dirname takes the hard drive path
app.use(www)

app.listen(8000, ready)
// generally a safe bet to use server numbers greater than 3000
// servers generally use 80, but may require admin priv

function ready (){
    console.log(`running the server on port ${port}!`)
}

// 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

// this is the most common way
// you can use arrow syntax

// use ctrl-c to kill a process

// use npm init to initialize json