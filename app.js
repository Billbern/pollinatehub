const path = require('path');
const express = require('express');

let app = express();
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3040);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    res.render('home', {title:'Coniwas | Coalition of NGOs in the Water and Sanitation'})
})

app.listen(app.get('port'), () => {
    console.info(`Server listening on port ${app.get('port')}`)
});
