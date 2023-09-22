const express = require('express')

const app = express()
const login = require('./routes/auth')
const userRoute = require('./routes/user')

const config = require('config')
console.log(`appEnvironment:${config.get('name')}`);
console.log(`the port:${config.get('port')}`);
console.log('dataContent :' + config.get('data.dataContent'));
console.log('password:' + config.get('data.password'));

const port = process.env.PORT || 3000
console.log(port);
const validate = require('./validate')
const { error } = require('console')
app.use(express.static('./methods-public'))
app.use(express.json())
app.use('/login', login)
app.use('/all', userRoute)
app.use(express.urlencoded({ extended: false }))

app.listen(3000, () => {
    console.log('nice server');
})

//function that validates the put handler//