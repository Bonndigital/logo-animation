let bonnDigitalLogo = function() {
    'use strict';

    let color = '#bd1332';
    let triWid = 50
    let triHei = 58
    let x = 0
    let y = 0
    let pad = 5
    let triCount = 0;
    let rotate = 0;

    const debug = false // internal

    let tc = function(s, x, y, rot) {
        let tri = s.append('g')
            .attr('class', 'bd-triangle-group bd-triangle-group-' + triCount)
            // always shifting triangle-width/2 to correct logo to real center
            .attr('transform', 'translate(' + (x + triWid / 2) + ', ' + y +
                ') ' + 'rotate(' + rot + ')')
        let path = tri.append('path')
            .attr('class', 'bd-triangle bd-triangle-' + triCount)
            .attr('d', 'M-' + triWid / 2 + ' -' + triHei / 2 + ' L' +
                triWid / 2 + ' 0 L-' + triWid / 2 + ' ' + triHei / 2 + ' Z')
        if (debug) {
            path.attr('stroke', color)
            tri.append('circle')
                .attr('r', 2)
                .attr('fill', 'yellow')
        } else {
            path.attr('fill', color)
        }
        triCount++;
    }

    let chart = function(selection) {
        selection.each(function(data, i, nodes) {
            let s = d3.select(nodes[i])
                .append('g')
                .attr('class', 'bd-logo')
            tc(s, x, y, 0)
            tc(s, x, y - triHei / 2 - pad, 180)
            tc(s, x + triWid + pad, y - triHei / 2 - pad, 0)
            tc(s, x + triWid + pad, y - triHei - pad * 2, 180)
            tc(s, x + triWid + pad, y - triHei * 1.5 - pad * 3, 0)
            tc(s, x, y - triHei * 1.5 - pad * 3, 180)
            tc(s, x, y - triHei * 2 - pad * 4, 0)
            tc(s, x - triWid - pad, y - triHei * 2 - pad * 4, 180)
            tc(s, x - triWid - pad, y - triHei * 1.5 - pad * 3, 0)
            tc(s, x - triWid * 2 - pad * 2, y - triHei * 1.5 - pad * 3, 180)
            tc(s, x - triWid * 2 - pad * 2, y - triHei - pad * 2, 0)
            tc(s, x - triWid * 2 - pad * 2, y - triHei * 0.5 - pad, 180)
            tc(s, x - triWid * 2 - pad * 2, y, 0)
            tc(s, x - triWid * 2 - pad * 2, y + triHei * 0.5 + pad, 180)
            tc(s, x - triWid * 2 - pad * 2, y + triHei + pad * 2, 0)
            tc(s, x - triWid * 2 - pad * 2, y + triHei * 1.5 + pad * 3, 180)
            tc(s, x - triWid - pad, y + triHei * 2 + pad * 4, 180)
            tc(s, x, y + triHei * 2 + pad * 4, 0)
            tc(s, x, y + triHei * 1.5 + pad * 3, 180)
            tc(s, x + triWid + pad, y + triHei * 1.5 + pad * 3, 0)
            tc(s, x + triWid + pad, y + triHei + pad * 2, 180)
            tc(s, x + triWid + pad, y + triHei * 0.5 + pad, 0)
            tc(s, x, y + triHei * 0.5 + pad, 180)

            if (rotate != 0) {
                if (debug) {
                    s.append('circle')
                        .attr('fill', 'green')
                        .attr('r', 10)
                        .attr('cx', x)
                        .attr('cy', y)
                }
                s.attr('transform', 'rotate(' + rotate + ',' +
                    x + ',' + y + ')')
            }
        });
    };

    chart.x = function(value) {
        if (!arguments.length) return x
        x = value;
        return chart;
    }

    chart.y = function(value) {
        if (!arguments.length) return y
        y = value;
        return chart;
    }

    chart.color = function(value) {
        if (!arguments.length) return color
        color = value;
        return chart;
    }

    chart.triangleWidth = function(value) {
        if (!arguments.length) return triWid
        triWid = value;
        return chart;
    }

    chart.triangleHeight = function(value) {
        if (!arguments.length) return triHei
        triHei = value;
        return chart;
    }

    chart.padding = function(value) {
        if (!arguments.length) return pad
        pad = value;
        return chart;
    }

    chart.triangleCount = function(value) {
        return triCount;
    }

    chart.rotate = function(value) {
        if (!arguments.length) return rotate
        rotate = value;
        return chart;
    }

    return chart;
};

let rand = function(max, min) {
    min = min || 0
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
