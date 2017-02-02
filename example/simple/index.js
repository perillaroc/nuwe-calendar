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
                type: 'sequential',
                domain: [1,8],
                range: {
                    type: 'scale-chromatic',
                    scheme: 'YlOrRd'
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