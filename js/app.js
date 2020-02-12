$(function () {
    console.log("DOM");

    const progressBar = $('.progress-bar');
    const span = progressBar.find('span');

    const bar1 = $('.bar1');
    const blue = bar1.find('.blue');
    const green = bar1.find('.green');
    const orange = bar1.find('.orange');

    blue.on("click", function () {
        span.css({
            backgroundColor: "#434e9a",
            height: "2.8rem",
            width: "50%",
        });
        span.text('50%');
    });

    green.on("click", function () {
        span.css({
            backgroundColor: "green",
            height: "2.8rem",
            width: "20%",
        });
        span.text('20%');
    });

    orange.on("click", function () {
        span.css({
            backgroundColor: "coral",
            height: "2.8rem",
            width: "90%",
        });
        span.text('90%');
    });

    const bar2 = $('.bar2');
    const yellow = bar2.find('.yellow');
    const red = bar2.find('.red');
    const pink = bar2.find('.pink');


    yellow.on("click", function () {
        span.css({
            backgroundColor: "gold",
            height: "2.8rem",
            width: "80%",
        });
        span.text('80%');
    });

    red.on("click", function () {
        span.css({
            backgroundColor: "#ff3f2b",
            height: "2.8rem",
            width: "40%",
        });
        span.text('40%');
    });

    pink.on("click", function () {
        span.css({
            backgroundColor: "pink",
            height: "2.8rem",
            width: "100%",
        });
        span.text('100%');
    });

    const bar3 = $('.bar3');
    const purple = bar3.find('.purple');
    const maroon = bar3.find('.maroon');
    const olive = bar3.find('.olive');


    purple.on("click", function () {
        span.css({
            backgroundColor: "purple",
            height: "2.8rem",
            width: "10%",
        });
        span.text('10%');
    });

    maroon.on("click", function () {
        span.css({
            backgroundColor: "maroon",
            height: "2.8rem",
            width: "70%",
        });
        span.text('70%');
    });

    olive.on("click", function () {
        span.css({
            backgroundColor: "olive",
            height: "2.8rem",
            width: "30%",
        });
        span.text("30%");
    });

    const inputDark = $('#darkmode');
    const inputLight = $('#lightmode');
    const check = $('.choose');

    inputDark.on('click', function () {
        check.css({
            left: "4.5rem",
        })
    });

    inputLight.on('click', function () {
        check.css({
            left: "0.4rem",
        })
    })

});