(function() {

    let cv = d3wb.config().attr('bgColor', 'black').toCanvas();

    cv.call(bonnDigitalLogo()
        .x(cv.wid / 2)
        .y(cv.hei / 2)
        .triangleWidth(25)
        .triangleHeight(28)
        .padding(15)
    );


})();
