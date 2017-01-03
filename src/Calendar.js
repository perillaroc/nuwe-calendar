import {
    format,
    timeFormat,
    scaleQuantize,
    range,
    select,
    timeDays,
    timeMonths
}  from 'd3';

export class Calendar{
    /**
     *
     * @param context
     * @param config
     *  {
     *      type: 'calendar',
     *      data: {
     *          time_range: {
     *              type: 'range',
     *              start: 2016
     *              stop: 2017
     *          }
     *          scheme: {
     *              'date': 'YYYY/M/D', format used in moment.js
     *          },
     *          value_scale: {
     *              type: 'quantize',
     *              domain: [1,5],
     *              range: 5
     *          }
     *          data: [
     *              'date': date string,
     *              'value: integer
     *          ]
     *      },
     *      options: {
     *          size: {
     *              width: 960,
     *              height: 136,
     *              cell_size: 17
     *          },
     *
     *      }
     */
    constructor(context, config) {
        this.context = context;
        this.config = Object.assign({}, Calendar.default);
        this.config.data.data = config.data.data;
        this.drawChart(this.context, this.config);
    }

    drawChart(context, config) {
        let chart = this;

        chart.width = config.options.size.width;
        chart.height = config.options.size.height;
        chart.cell_size = config.options.size.cell_size; // cell size

        chart.day = timeFormat("%w"); // weekday as a decimal number [0(Sunday),6].
        chart.week = timeFormat("%U"); // week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
        chart.format = timeFormat("%Y-%m-%d");

        let color = scaleQuantize()
            .domain(config.data.value_scale.domain)
            .range(range(config.data.value_scale.range).map(function(d) { return "q" + d + "-7"; }));

        let time_data = range(config.data.time_range.start,config.data.time_range.stop);
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

        let data = config.data.data;

        rect.filter(function(d, i) {
            return data[i];
        }).attr("class", function(d, i) {
            if(data[i].value == -1)
                return "day ";
            else if(data[i].value == 0)
                return "day zero";
            else
                return "day " + color(data[i].value);
        })
        .select("title")
        .text(function(d, i) {
            return d + ": " + data[i].value;
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
}

Calendar.default = {
   type: 'calendar',
   data: {
       time_range: {
           type: 'range',
           start: 2016,
           stop: 2017,
       },
       scheme: {
           'date': 'YYYY/M/D',
       },
       value_scale: {
           type: 'quantize',
           domain: [1,5],
           range: 5
       },
   },
   options: {
       size: {
           width: 960,
           height: 136,
           cell_size: 17
       },
   }
};