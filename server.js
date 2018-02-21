// Instanciar servidor
const express = require('express'); 
const app = express();

// Minimizar archivos con webpack
const webpackHotMiddleware = require('webpack-hot-middleware'); 
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const copiler = webpack(webpackConfig); //Copilamos el archivo de configiracion webpack

//Indicamos ruta de archivos estaticos
app.use(express.static(__dirname + 'public'));

//Configuramos webpack middleware para que detecte los cambios automaticamente y recopile
app.use(webpackDevMiddleware(copiler,{
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	filename: 'bundle.js',
	stats:{
		colors: true
	},
	historyApiFallBack: true
}));

app.use(webpackHotMiddleware(copiler,{
	log: console.log
}));

//Routes
app.get("/", () =>{
	console.log('Hello world');
});

//Lanzamos el servidor en el puerto 3000
app.listen(3000, () =>{
	console.log('Server up');
});

