(function() {

    let cv = d3wb.config().attr('bgColor', 'black').toCanvas();
    let logo = bonnDigitalLogo()
        .x(cv.wid / 2)
        .y(cv.hei / 2)
    cv.call(logo);

    let aniSpeed = 600;

    setInterval(function() {
        // select random color
        let randCol = 'rgb(' +
            rand(255) + ', ' + rand(255) + ', ' + rand(255) + ', ' + Math.random() + ')'
        // animate color change
        cv.select('.bd-triangle-' + rand(logo.triangleCount()))
            .transition().duration(aniSpeed)
            .style('fill', randCol)
            .transition().duration(aniSpeed)
            .style('fill', logo.color())
    }, 100);

})();
