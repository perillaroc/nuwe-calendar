import {
    format,
    timeFormat,
    scaleQuantize,
    range,
    select,
    selectAll,
    timeDay,
    timeDays,
    timeWeek,
    timeMonths
}  from 'd3';

export class Calendar{
    constructor(context, config) {

        let chart = this;

        chart.width = 960;
        chart.height = 136;
        chart.cellSize = 17; // cell size

        chart.day = timeFormat("%w"); // weekday as a decimal number [0(Sunday),6].
        chart.week = timeFormat("%U"); // week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
        chart.percent = format(".1%");
        chart.format = timeFormat("%Y-%m-%d");

        let color = scaleQuantize()
            .domain([1, 5])
            .range(range(5).map(function(d) { return "q" + d + "-7"; }));

        let svg = select(context).selectAll("svg")
            .data(range(2016, 2017))
            .enter().append("svg")
            .attr("width", chart.width)
            .attr("height", chart.height)
            .attr("class", "nuwe-calendar YlOrRd")
            .append("g")
            .attr("transform", "translate(" + ((chart.width - chart.cellSize * 53) / 2) + "," + (chart.height - chart.cellSize * 7 - 1) + ")");

        svg.append("text")
            .attr("transform", "translate(-6," + chart.cellSize * 3.5 + ")rotate(-90)")
            .style("text-anchor", "middle")
            .text(function(d) { return d; });

        let rect = svg.selectAll(".day")
            .data(function(d) { return timeDays(new Date(d, 0, 1), new Date(d, 12, 0)); })
            .enter().append("rect")
            .attr("class", "day")
            .attr("width", chart.cellSize)
            .attr("height", chart.cellSize)
            .attr("x", function(d) {
                return chart.week(d) * chart.cellSize;
            })
            .attr("y", function(d) {
                return chart.day(d) * chart.cellSize;
            })
            .datum(chart.format);

        rect.append("title")
            .text(function(d) { return d; });

        svg.selectAll(".month")
            .data(function(d) { return timeMonths(new Date(d, 0, 1), new Date(d, 12, 0)); })
            .enter().append("path")
            .attr("class", "month")
            .attr("d", chart.monthPath.bind(chart));

        let data = config.data;

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
            .text(function(d) {
                return d + ": " + chart.percent(data[d]);
            });


    }

    monthPath(t0) {
        let t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
            d0 = +this.day(t0), w0 = +this.week(t0),
            d1 = +this.day(t1), w1 = +this.week(t1);
        return "M" + (w0 + 1) * this.cellSize + "," + d0 * this.cellSize
            + "H" + w0 * this.cellSize + "V" + 7 * this.cellSize
            + "H" + w1 * this.cellSize + "V" + (d1 + 1) * this.cellSize
            + "H" + (w1 + 1) * this.cellSize + "V" + 0
            + "H" + (w0 + 1) * this.cellSize + "Z";
    }
}