const express = require('express'); // inclusion d'express
// Instanciation d'une application express
const app = express();
const path = require('path');
const { title } = require('process');

// Configuration de l'application : une première gestion "basique" des requêtes.
// app.use((req, res) => {
//     // Une fois encore, les requêtes sont pour l'instant toutes traitées de la même manière.
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html;charset=utf-8');
//     res.end('Le serveur Express dit <b>bonjour</b>');
//     console.log(req.method);
// });

// 1er middleware : ex. d'affichage d'informations dans la console
// app.use((req, res, next) => {
//     const now = new Date().toDateString() ;
//     console.log(`${now} : une requête ${req.method} est arrivée !`);
//     next(); // l'appel à next() transmet les informations pour traitement dans le middleware suivant
// });

// 2ème middleware : préparation de la réponse
// app.use((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html;charset=utf-8');
//     next(); // l'appel à next() transmet les informations pour traitement dans le middleware suivant
// });

// // 3ème middelware : envoi de la réponse
// app.use((req, res) => {
//     res.end('Le serveur Express dit <b>bonjour</b>');
// });

 app.use(express.static(path.join(__dirname,'public')));

 app.set('views', path.join(__dirname, 'views')); // Déclaration du dossier contenant les vues
 app.set('view engine', 'ejs'); // Définition du moteur de rendu 

 const expressLayouts = require('express-ejs-layouts'); // Importation du module express-ejs-layouts
 app.use(expressLayouts); // Ajout du module express-ejs-layouts comme middleware
 app.set('layout', '../views/layouts/layout'); // Définition du layout par défaut

// app.use((req, res) => {
//     // demande de rendu EJS
//     const user = {nickname:'Mehdi', sex:'M'} ;
//     res.render('pages/home', { user }) ; // on donne le chemin dans views, et on omet le .ejs

// });






// Middleware déclenché pour quelle que soit la requête
app.use((req, res, next) => {
    const now = new Date().toDateString() ;
    console.log(`${now} : une requête ${req.method} est arrivée !`);
    next();
});

// Route déclenchée uniquement pour les requêtes GET vers l'URL racine "/"
app.get('/', (req, res) => {
    //res.end('<h1>Bienvenue sur la HOME PAGE</h1>') ;
    res.render('pages/home', {title: 'Accueil'}) ;
});

// Route déclenchée uniquement pour les requêtes GET vers l'URL "/about"
app.get('/about', (req, res) => {
    //res.end('<p>Ce cours est inspiré de la documentation Express.</p>') ;
    res.render('pages/about', {title: 'À propos'}) ;
}) ;

// Route déclenchée pour toutes requêtes GET non matchées par les précédentes
// ATTENTION : l'ordre de déclaration des routes est important !
app.get('/*path', (req, res) => {
    // res.send('<p>... je ne sais pas quoi dire ...</p>') ;
    res.redirect('/') ;
});




// Exportation de notre application express
module.exports = app;