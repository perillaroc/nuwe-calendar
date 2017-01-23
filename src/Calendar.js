import {
    timeFormat,
    scaleQuantize,
    range,
    select,
    timeDays,
    timeMonths
}  from 'd3';
let moment = require('moment');

import {mergeConfig} from './config'

export class Calendar{
    /**
     *
     * @param context
     * @param config
     *  {
     *      type: 'calendar',
     *      data: {
     *          scheme: {
     *              'date': 'YYYY/M/D', format used in moment.js
     *          },
     *          data: [
     *              {
     *                  'date': date string,
     *                  'value: integer
     *              }
     *          ]
     *      },
     *      options: {
     *          size: {
     *              width: 960,
     *              height: 136,
     *              cell_size: 17
     *          },
     *          scales: {
     *              value: {
     *                  type: 'quantize',
     *                  domain: [1,5],
     *                  range: 5
     *              },
     *              time: {
     *                  type: 'range',
     *                  start: 2016
     *                  stop: 2017
     *              }
     *          }
     *      }
     */
    constructor(context, config) {
        this.context = context;
        this.config = mergeConfig(Calendar.default, config);
        this.drawChart(this.context, this.config);
    }

    drawChart(context, config) {
        let chart = this;

        // option
        chart.width = config.options.size.width;
        chart.height = config.options.size.height;
        chart.cell_size = config.options.size.cell_size; // cell size

        // data
        chart.scheme = config.data.scheme;
        let time_data = range(config.options.scales.time.start, config.options.scales.time.stop);

        let date_map = new Map();
        let days = timeDays(new Date(time_data[0], 0, 1), new Date(time_data[time_data.length-1], 12, 0));
        days.forEach(function(element){
            date_map.set(moment(element).format("YYYY-MM-DD"), -1);
        });
        chart.fullFillData(date_map, config);

        // show
        chart.day = timeFormat("%w"); // weekday as a decimal number [0(Sunday),6].
        chart.week = timeFormat("%U"); // week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
        chart.format = timeFormat("%Y-%m-%d");

        let color = scaleQuantize()
            .domain(config.options.scales.value.domain)
            .range(range(config.options.scales.value.range).map(function(d) { return "q" + d + "-7"; }));

        let svg = select(context).selectAll("svg")
            .data(time_data)
            .enter().append("svg")
            .attr("width", chart.width)
            .attr("height", chart.height)
            .attr("class", "nuwe-calendar YlOrRd")
            .append("g")
            .attr("transform", "translate(" + ((chart.width - chart.cell_size * 53) / 2) + "," + (chart.height - chart.cell_size * 7 - 1) + ")");

        svg.append("text")
            .attr("transform", "translate(-6," + chart.cell_size * 3.5 + ")rotate(-90)")
            .style("text-anchor", "middle")
            .text(function(d) { return d; });

        let rect = svg.selectAll(".day")
            .data(function(d) { return timeDays(new Date(d, 0, 1), new Date(d, 12, 0)); })
            .enter().append("rect")
            .attr("class", "day")
            .attr("width", chart.cell_size)
            .attr("height", chart.cell_size)
            .attr("x", function(d) {
                return chart.week(d) * chart.cell_size;
            })
            .attr("y", function(d) {
                return chart.day(d) * chart.cell_size;
            })
            .datum(chart.format);

        rect.append("title")
            .text(function(d) { return d; });

        svg.selectAll(".month")
            .data(function(d) { return timeMonths(new Date(d, 0, 1), new Date(d, 12, 0)); })
            .enter().append("path")
            .attr("class", "month")
            .attr("d", chart.monthPath.bind(chart));

        rect.attr("class", function(d) {
            let date = moment(d).format("YYYY-MM-DD");
            if(date_map.get(date) == -1)
                return "day ";
            else if(date_map.get(date) == 0)
                return "day zero";
            else
                return "day " + color(date_map.get(date));
        })
        .select("title")
        .text(function(d) {
            let date = moment(d).format("YYYY-MM-DD");
            return date + ": " + date_map.get(date);
        });
    }

    monthPath(t0) {
        let t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
            d0 = +this.day(t0), w0 = +this.week(t0),
            d1 = +this.day(t1), w1 = +this.week(t1);
        return "M" + (w0 + 1) * this.cell_size + "," + d0 * this.cell_size
            + "H" + w0 * this.cell_size + "V" + 7 * this.cell_size
            + "H" + w1 * this.cell_size + "V" + (d1 + 1) * this.cell_size
            + "H" + (w1 + 1) * this.cell_size + "V" + 0
            + "H" + (w0 + 1) * this.cell_size + "Z";
    }

    fullFillData(base_map, config){
        config.data.data.forEach(function(element){
            let date = moment(element.date, config.data.scheme.date);
            base_map.set(date.format("YYYY-MM-DD"), element.value);
        })
    }
}

Calendar.default = {
   type: 'calendar',
   data: {
       scheme: {
           'date': 'YYYY/M/D',
       },
       data: []
   },
   options: {
       size: {
           width: 960,
           height: 136,
           cell_size: 17
       },
       scales: {
           value: {
               type: 'quantize',
               domain: [1,5],
               range: 5
           },
           time: {
               type: 'range',
               start: 2016,
               stop: 2017,
           },
       }
   }
};