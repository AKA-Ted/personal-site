//===========================
// PUERTO
//===========================
process.env.PORT = process.env.PORT || 3000;

//===========================
// ENTORNO DE DESARROLLO
//===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';

//===========================
// VENCIMIENTO DEL TOKEN
//===========================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 *30

//===========================
// SEED de autenticacióñ
//===========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

//===========================
// BASE DE DATOS
//===========================
let urlDB;

if(process.env.NODE_ENV === 'DEV'){
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI
}

process.env.URLDB = urlDB;


//===========================
// Google Client ID
//===========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '1005574466245-fpbf2qm47vgidmtt4hg84aem1702vkp9.apps.googleusercontent.com'