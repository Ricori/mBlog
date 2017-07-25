require('../scss/main.scss');
var mainRender = require('../templates/main.ejs')

/* 

Your JS code

*/

document.body.innerHTML = mainRender({data:'This is a webpack-demo'});