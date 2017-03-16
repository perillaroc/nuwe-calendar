import {
    timeFormat,
    scaleSequential,
    range,
    select,
    timeDays,
    timeMonths
} from "d3";
import * as d3_scale_chromatic from "d3-scale-chromatic" ;
import {mergeConfig} from "./config";
let moment = require('moment');

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
     *                  type: 'sequential',
     *                  domain: [-1, 5]
     *                  range: {
     *                      type: 'scale-chromatic',
     *                      scheme: 'YlOrRd'
     *                  },
     *                  special: [
     *                      { value: -1, color:"#eeeeee" }
     *                  ]
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

        // data
        chart.scheme = config.data.scheme;
        let year_list = range(config.options.scales.time.start, config.options.scales.time.stop);

        let date_map = new Map();
        let day_list = timeDays(new Date(year_list[0], 0, 1), new Date(year_list[year_list.length-1], 12, 0));
        day_list.forEach(function(element){
            date_map.set(moment(element).format("YYYY-MM-DD"), -1);
        });
        Calendar.fullFillData(date_map, config);

        // option
        chart.width = config.options.size.width;
        chart.height = config.options.size.height;
        chart.cell_size = config.options.size.cell_size;

        let color_domain = config.options.scales.value.domain;
        let color_range_scheme = config.options.scales.value.range.scheme;
        let color_function_name = "interpolate" + color_range_scheme;
        let color_function = d3_scale_chromatic[color_function_name];
        let color = scaleSequential(color_function)
            .domain(color_domain);

        let special_map = new Map();
        config.options.scales.value.special.forEach(function(item){
            special_map.set(item.value, item.color);
        });

        // format
        chart.day = timeFormat("%w"); // weekday as a decimal number [0(Sunday),6].
        chart.week = timeFormat("%U"); // week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
        chart.format = timeFormat("%Y-%m-%d");

        let svg = select(context).selectAll("svg")
            .data(year_list)
            .enter().append("svg")
            .attr("width", chart.width)
            .attr("height", chart.height)
            .attr("class", "nuwe-calendar")
            .append("g")
            .attr("transform", "translate(" + ((chart.width - chart.cell_size * 53) / 2) + "," + (chart.height - chart.cell_size * 7 - 1) + ")");

        svg.append("text")
            .attr("transform", "translate(-6," + chart.cell_size * 3.5 + ")rotate(-90)")
            .style("text-anchor", "middle")
            .text(function(d) { return d; });

        let rect = svg.selectAll(".day")
            .data(function(year) {
                return timeDays(new Date(year, 0, 1), new Date(year, 12, 0));
            })
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

        let months = svg.selectAll(".month")
            .data(function(year) {
                return timeMonths(new Date(year, 0, 1), new Date(year, 12, 0));
            });
        months.enter().append("path")
            .attr("class", "month")
            .attr("d", chart.monthPath.bind(chart));
        months.enter().append("text")
            .attr('x', function(d){
                let last_day_in_month = new Date(d.getFullYear(), d.getMonth()+1, 0);
                return ((parseInt(chart.week(d)) + parseInt(chart.week(last_day_in_month)))/2 + 0.5)* chart.cell_size;
            })
            .attr('y', function(d){
                return -10;
            })
            .attr('text-anchor', 'middle')
            .text(function(d){
                return moment(d).format('MMM');
            });

        rect.attr("class", function(d) {
            let date = moment(d).format("YYYY-MM-DD");
            if(date_map.get(date) == -1)
                return "day";
            else if(date_map.get(date) == 0)
                return "day zero";
            else
                return "day";
        }).style('fill', function(d){
            let date = moment(d).format("YYYY-MM-DD");
            if(date_map.get(date) == -1)
                return special_map.get(-1);
            else if(date_map.get(date) == 0)
                return special_map.get(0);
            else
                return color(date_map.get(date));
        }).select("title").text(function(d) {
            let date = moment(d).format("YYYY-MM-DD");
            let value = date_map.get(date);
            return date + ": " + value;
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

    static fullFillData(base_map, config){
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
                type: 'sequential',
                domain: [-1, 5],
                range: {
                    type: 'scale-chromatic',
                    scheme: 'YlOrRd'
                },
                special: [
                    {
                        value: -1,
                        color: "#eeeeee"
                    },
                    {
                        value: 0,
                        color: "rgb(194,230,153)"
                    }
                ]
            },
            time: {
                type: 'range',
                start: (new Date()).getFullYear(),
                stop: (new Date()).getFullYear()+1,
            },
        }
    }
};