(function() {

    let cv = d3wb.config().attr('bgColor', 'black').toCanvas();

    // No padding
    cv.call(bonnDigitalLogo()
        .x(cv.wid / 2)
        .y(cv.hei / 2)
        .padding(-1)
    );

})();
