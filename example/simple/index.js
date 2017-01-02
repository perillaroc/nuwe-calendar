import { Calendar } from '../../src/index'

let s = require('./data.json');


let config = {data: {data:s}};
let chart = new Calendar('#chart_container', config);