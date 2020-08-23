$(() => {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");

    let currentColor = {
        hue: 180,
        saturation: 1.0,
        brightness: 1.0
    };

    displayRGB(currentColor);

    function draw(hue, saturation, brightness) {
        let [red, green, blue] = hsv2rgb(hue, saturation, brightness);

        let image = ctx.createImageData(100, 100);
        let data = image.data;

        let length = 100*100*4;
        for (let i = 0; i < length; i += 2) {
            data[i] = red;
            data[i+1] = green;
            data[i+2] = blue;
        }

        ctx.putImageData(image, 0, 0);
    }

    // hue in range [0, 360]
    // saturation, value in range [0,1]
    // return [r,g,b] each in range [0,255]
    // See: https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSV
    function hsv2rgb(hue, saturation, brightness) {
        let chroma = brightness * saturation;
        let hue1 = hue / 60;
        let x = chroma * (1- Math.abs((hue1 % 2) - 1));
        let r1, g1, b1;
        if (hue1 >= 0 && hue1 <= 1) {
            ([r1, g1, b1] = [chroma, x, 0]);
        } else if (hue1 >= 1 && hue1 <= 2) {
            ([r1, g1, b1] = [x, chroma, 0]);
        } else if (hue1 >= 2 && hue1 <= 3) {
            ([r1, g1, b1] = [0, chroma, x]);
        } else if (hue1 >= 3 && hue1 <= 4) {
            ([r1, g1, b1] = [0, x, chroma]);
        } else if (hue1 >= 4 && hue1 <= 5) {
            ([r1, g1, b1] = [x, 0, chroma]);
        } else if (hue1 >= 5 && hue1 <= 6) {
            ([r1, g1, b1] = [chroma, 0, x]);
        }

        let m = brightness - chroma;
        let [r,g,b] = [r1+m, g1+m, b1+m];
        console.log(r);
        console.log(g);
        console.log(b);

        // Change r,g,b values from [0,1] to [0,255]
        return [255*r,255*g,255*b];
    }

    $('#hue,#saturation,#brightness').on('input', (e) => {
        let colorName = $(e.target).parent('div').attr('id');
        console.log(colorName);
        // @ts-ignore
        let sliderValue = parseFloat(e.target.value);
        currentColor[colorName] = sliderValue;
        // $(e.target).siblings('label').text(colorName + ': ' + sliderValue);

        let {hue, saturation, brightness} = currentColor;
        requestAnimationFrame(() => {
            console.log("test");
            draw(hue, saturation, brightness);
            displayRGB(currentColor);
        });
    });

    function displayRGB(currentColor) {
        let {hue, saturation, brightness} = currentColor;
        let [r,g,b] = hsv2rgb(hue, saturation, brightness);
        $('#rgb').text(`r,g,b: (${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)})`);
    }

    // draw the square initially
    let {hue, saturation, brightness} = currentColor;
    draw(hue, saturation, brightness);
});