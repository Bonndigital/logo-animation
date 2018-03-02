(function() {

    let cv = d3wb.config().attr('bgColor', 'black').toCanvas();
    let logo = bonnDigitalLogo()
        .x(cv.wid / 2)
        .y(cv.hei / 2)
    cv.call(logo);

    let aniSpeed = 400;
    let colorScale = d3wb.color.linearGradient(
        [0.0, 1.0], ['#5c0a19', '#d08694']
    )

    setInterval(function() {

        cv.select('.bd-triangle-' + rand(logo.triangleCount()))
            .transition().duration(aniSpeed)
            .style('fill', colorScale(Math.random()))
            .transition().duration(aniSpeed)
            .style('fill', logo.color())

    }, 50);

})();
