$(function () {
    console.log("DOM");

    const progressBar = $('.progress-bar');
    const span = progressBar.find('span');
    const percent = $('h2');

    const set1 = $('.set1');
    const blue = set1.find('.blue');
    const green = set1.find('.green');
    const orange = set1.find('.orange');

    blue.on("click", function () {
        span.css({
            backgroundColor: "#434e9a",
            height: "1.3rem",
            width: "10%",
        });
        percent.text('10%');
    });

    green.on("click", function () {
        span.css({
            backgroundColor: "green",
            height: "1.3rem",
            width: "20%",
        });
        percent.text('20%');
    });

    orange.on("click", function () {
        span.css({
            backgroundColor: "coral",
            height: "1.3rem",
            width: "30%",
        });
        percent.text('30%');
    });

    const set2 = $('.set2');
    const yellow = set2.find('.yellow');
    const red = set2.find('.red');
    const pink = set2.find('.pink');


    yellow.on("click", function () {
        span.css({
            backgroundColor: "gold",
            height: "1.3rem",
            width: "40%",
        });
        percent.text('40%');
    });

    red.on("click", function () {
        span.css({
            backgroundColor: "#ff3f2b",
            height: "1.3rem",
            width: "50%",
        });
        percent.text('50%');
    });

    pink.on("click", function () {
        span.css({
            backgroundColor: "pink",
            height: "1.3rem",
            width: "60%",
        });
        percent.text('60%');
    });

    const set3 = $('.set3');
    const purple = set3.find('.purple');
    const maroon = set3.find('.maroon');
    const olive = set3.find('.olive');


    purple.on("click", function () {
        span.css({
            backgroundColor: "purple",
            height: "1.3rem",
            width: "70%",
        });
        percent.text('70%');
    });

    maroon.on("click", function () {
        span.css({
            backgroundColor: "maroon",
            height: "1.3rem",
            width: "80%",
        });
        percent.text('80%');
    });

    olive.on("click", function () {
        span.css({
            backgroundColor: "olive",
            height: "1.3rem",
            width: "90%",
        });
        percent.text("90%");
    });

    const inputDark = $('#darkmode');
    const inputLight = $('#lightmode');
    const check = $('.choose');
    const body = $('body');

    inputDark.on('click', function () {
        check.css({
            left: "4.5rem",
        });
        body.addClass("darkMode");
    });

    inputLight.on('click', function () {
        check.css({
            left: "0.4rem",
        });
        body.removeClass("darkMode");
    })

});