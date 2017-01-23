'use strict';
import {Calendar} from '../../src/Calendar'
import {mergeConfig} from '../../src/config'

describe('options-size', ()=> {
    it('default config', ()=>{
        let user_config = {};
        let merged_config = mergeConfig(Calendar.default, user_config);
        expect(merged_config).toEqual(Calendar.default);
    });

    it('data', ()=>{
        let data = [
            {
                'date': '2016-01-01',
                'value': 0
            },
            {
                'date': '2016-01-01',
                'value': 0
            }
        ];
        let user_config = {
            data: {
                data: data
            }
        };
        let merged_config = mergeConfig(Calendar.default, user_config);
        expect(merged_config.data.data).toEqual(data);
    });

    it('scheme', ()=>{
        let data = [
            {
                'date': '2016-01-01',
                'value': 0
            },
            {
                'date': '2016-01-01',
                'value': 0
            }
        ];
        let user_config = {
            data: {
                scheme: {
                    date: 'YYYY/MM/DD'
                },
                data: data
            }
        };
        let merged_config = mergeConfig(Calendar.default, user_config);
        expect(merged_config.data.scheme).toEqual(user_config.data.scheme);
    });

    it('value scale', function(){
        let user_config = {
            data: {
                scheme: {
                    date: 'YYYY/MM/DD'
                },
                data: [
                    {
                        'date': '2016-01-01',
                        'value': 0
                    },
                    {
                        'date': '2016-01-01',
                        'value': 0
                    }
                ]
            },
            options: {
                scales: {
                    value: {
                        domain: [1, 6],
                        range: 6
                    }
                }
            }
        };
        let merged_config = mergeConfig(Calendar.default, user_config);
        expect(merged_config.options.scales.value).toEqual(
            {
                type: 'quantize',
                domain: [1,6],
                range: 6
            }
        );
    })
});