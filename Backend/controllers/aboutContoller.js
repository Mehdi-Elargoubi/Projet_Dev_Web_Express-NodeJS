module.exports.home = (req, res) => {
    //res.send('<h1>Bienvenue sur la PAGE À PROPOS</h1>') ;
    res.render('pages/about', {title: 'À propos'}) ;
}