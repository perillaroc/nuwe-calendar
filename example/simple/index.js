import { Calendar } from '../../src/index'

let data = require('./data.json');

let config = {
    data: {
        data: data
    },
    options: {
        size: {
            width: 1200,
            height: 200,
            cell_size: 20
        },
        scales: {
            value: {
                type: 'quantize',
                domain: [1,5],
                range: {
                    start: 0,
                    stop: 1,
                    step: 0.1
                }
            },
            time: {
                type: 'range',
                start: 2016,
                stop: 2017
            }
        }
    }
};

let chart = new Calendar('#chart_container', config);