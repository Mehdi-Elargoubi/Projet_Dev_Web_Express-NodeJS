module.exports.home = (req, res) => {
    //res.send('<h1>Bienvenue sur la HOME PAGE</h1>');
    res.render('pages/home', {title: 'Accueil'}) ;
}