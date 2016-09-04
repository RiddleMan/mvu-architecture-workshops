var Root = require('./Root');
var $ = require('jquery');

$('.todoapp').append(Root().el);

window.store = require('./store');
