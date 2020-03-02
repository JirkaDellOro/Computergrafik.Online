

    let canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.lineWidth = 2;
    //without filter
    ctx.fillText('Anti-aliasing', 60, 20);
    drawArc();
    //with filter
    ctx.setTransform(1, 0, 0, 1, 240, 0);
    ctx.fillText('ohne Anti-aliasing', 60, 20);
    ctx.filter = 'url(#remove-alpha)';
    drawArc();

    // to remove the filter
    ctx.filter = 'none';

    function drawArc() {
        ctx.beginPath();
        ctx.arc(125, 150, 100, 0, Math.PI * 2);
        ctx.stroke();
    }





