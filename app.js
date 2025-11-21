import 'dotenv/config';
import express from 'express';
import { engine } from 'express-handlebars';
//import { v2 as cloudinary } from 'cloudinary';

//db = database = base de datos
//import { Low } from 'lowdb';
//import { JSONFile } from 'lowdb/node';

//import upload from './config/multer.js';


const app = express();
const PORT = 3000;

// Configurar Cloudinary (donde vamos a guardar por ejemplo las cartas guardadas como fotos en formato png)
//cloudinary.config({
  //cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //api_key: process.env.CLOUDINARY_API_KEY,
  //api_secret: process.env.CLOUDINARY_API_SECRET
//});

// Configurar LowDB
//const adapter = new JSONFile('db.json');
//const db = new Low(adapter, { places: [] });
//await db.read();

// Configurar Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


//Ruta para la landing

// Ruta para la pagina donde escribir/diseñar la carta
app.get('/', async (req, res) => {
  await db.read();
  res.render('home', { carta: db.data.carta });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Ruta para enviar la carta o otro usuari@ desconocida (=convertir la carta finalizada en formato png y subir la carta como un archivo de imagen a Cloudinary y k sea enviada a otro usuari@ random)