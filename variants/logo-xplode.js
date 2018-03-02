(function() {

    let cv = d3wb.config().attr('bgColor', 'black').toCanvas();
    let logo = bonnDigitalLogo()
        .x(cv.wid / 2)
        .y(cv.hei / 2)
    cv.call(logo);

    cv.call(d3wb.add.textBox('Click\nlogo!')
        .x(10).y(10).height(35).width(30)
        .backgroundColor('rgba(189, 19, 50, 0.5)')
        .padding(3)
    )

    cv.select('.bd-logo').on('click', function() {
        cv.selectAll('.bd-triangle-group')
            .each(function(d, i, nodes) {
                let tri = d3.select(nodes[i])
                // store current transform value
                let store = tri.attr('transform')
                let xRand = rand(cv.wid)
                let yRand = rand(cv.wid)
                let rotRand = rand(360)
                tri.transition().duration(300)
                    .attr('transform', 'translate(' + cv.wid / 2 +
                        ',' + cv.hei / 2 + ')')
                    .transition().duration(500)
                    .attr('transform', 'translate(' + xRand + ',' +
                        yRand + ')  rotate(' + rotRand + ')')
                    .transition().duration(500)
                    .attr('transform', store)
            })
        cv.selectAll('.bd-triangle')
            .each(function(d, i, nodes) {
                let tri = d3.select(nodes[i])
                // store current transform value
                tri.transition().duration(500)
                    .attr('fill', 'yellow')
                    .transition().duration(500)
                    .attr('fill', logo.color())
            })
    })

})();
