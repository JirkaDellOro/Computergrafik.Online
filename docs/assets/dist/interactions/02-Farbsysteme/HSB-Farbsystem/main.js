$(function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var currentColor = {
        hue: 180,
        saturation: 1.0,
        brightness: 1.0
    };
    displayRGB(currentColor);
    function draw(hue, saturation, brightness) {
        var _a = hsv2rgb(hue, saturation, brightness), red = _a[0], green = _a[1], blue = _a[2];
        var image = ctx.createImageData(100, 100);
        var data = image.data;
        var length = 100 * 100 * 4;
        for (var i = 0; i < length; i += 2) {
            data[i] = red;
            data[i + 1] = green;
            data[i + 2] = blue;
        }
        ctx.putImageData(image, 0, 0);
    }
    // hue in range [0, 360]
    // saturation, value in range [0,1]
    // return [r,g,b] each in range [0,255]
    // See: https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSV
    function hsv2rgb(hue, saturation, brightness) {
        var _a, _b, _c, _d, _e, _f;
        var chroma = brightness * saturation;
        var hue1 = hue / 60;
        var x = chroma * (1 - Math.abs((hue1 % 2) - 1));
        var r1, g1, b1;
        if (hue1 >= 0 && hue1 <= 1) {
            (_a = [chroma, x, 0], r1 = _a[0], g1 = _a[1], b1 = _a[2]);
        }
        else if (hue1 >= 1 && hue1 <= 2) {
            (_b = [x, chroma, 0], r1 = _b[0], g1 = _b[1], b1 = _b[2]);
        }
        else if (hue1 >= 2 && hue1 <= 3) {
            (_c = [0, chroma, x], r1 = _c[0], g1 = _c[1], b1 = _c[2]);
        }
        else if (hue1 >= 3 && hue1 <= 4) {
            (_d = [0, x, chroma], r1 = _d[0], g1 = _d[1], b1 = _d[2]);
        }
        else if (hue1 >= 4 && hue1 <= 5) {
            (_e = [x, 0, chroma], r1 = _e[0], g1 = _e[1], b1 = _e[2]);
        }
        else if (hue1 >= 5 && hue1 <= 6) {
            (_f = [chroma, 0, x], r1 = _f[0], g1 = _f[1], b1 = _f[2]);
        }
        var m = brightness - chroma;
        var _g = [r1 + m, g1 + m, b1 + m], r = _g[0], g = _g[1], b = _g[2];
        console.log(r);
        console.log(g);
        console.log(b);
        // Change r,g,b values from [0,1] to [0,255]
        return [255 * r, 255 * g, 255 * b];
    }
    $('#hue,#saturation,#brightness').on('input', function (e) {
        var colorName = $(e.target).parent('div').attr('id');
        console.log(colorName);
        // @ts-ignore
        var sliderValue = parseFloat(e.target.value);
        currentColor[colorName] = sliderValue;
        // $(e.target).siblings('label').text(colorName + ': ' + sliderValue);
        var hue = currentColor.hue, saturation = currentColor.saturation, brightness = currentColor.brightness;
        requestAnimationFrame(function () {
            console.log("test");
            draw(hue, saturation, brightness);
            displayRGB(currentColor);
        });
    });
    function displayRGB(currentColor) {
        var hue = currentColor.hue, saturation = currentColor.saturation, brightness = currentColor.brightness;
        var _a = hsv2rgb(hue, saturation, brightness), r = _a[0], g = _a[1], b = _a[2];
        $('#rgb').text("r,g,b: (" + r.toFixed(0) + ", " + g.toFixed(0) + ", " + b.toFixed(0) + ")");
    }
    // draw the square initially
    var hue = currentColor.hue, saturation = currentColor.saturation, brightness = currentColor.brightness;
    draw(hue, saturation, brightness);
});
