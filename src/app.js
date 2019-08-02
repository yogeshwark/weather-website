const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()


// Define path for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsDirPath = path.join(__dirname, '../templates/views')
const partialsDirPath = path.join(__dirname, '../templates/partials')

// Serve static files from
app.use(express.static(publicDirPath))

//views path
app.set('view engine', 'hbs')
app.set('views', viewsDirPath)
hbs.registerPartials(partialsDirPath)

// routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Application'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Page not found!'
    })
})

app.listen(8080, () => {
    console.log('Server is up on 8080!')
})