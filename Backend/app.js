const express = require('express'); // inclusion d'express
// Instanciation d'une application express
const app = express();
const path = require('path');

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

app.set('view engine', 'ejs'); // Définition du moteur de rendu 
app.set('views', path.join(__dirname, 'views')); // Déclaration du dossier contenant les vues

app.use((req, res, next) => {
    const now = new Date().toDateString() ;
    console.log(`${now} : une requête ${req.method} est arrivée !`);
    // next();

    // demande de rendu EJS
    res.render('pages/home', { nickname: '', sex: '' }) ; // on donne le chemin dans views, et on omet le .ejs

});


// Exportation de notre application express
module.exports = app;