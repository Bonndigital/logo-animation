(function() {

    let cv = d3wb.config().attr('bgColor', 'black').toCanvas();
    let logo = bonnDigitalLogo()
        .x(cv.wid / 2)
        .y(cv.hei / 2)
    cv.call(logo);

    const itv = 100
    let select = 0;
    setInterval(function() {
        cv.selectAll('.bd-triangle')
            .each(function(d, i, nodes) {
                if (i == select) {
                    d3.select(nodes[i])
                        .transition()
                        .duration(itv)
                        .attr('fill', "rgba(189, 19, 50, 0.7)")
                } else {
                    d3.select(nodes[i])
                        .transition()
                        .duration(itv)
                        .attr('fill', logo.color())
                }
            })
        select = (select + 1) % logo.triangleCount();
    }, itv);

})();
