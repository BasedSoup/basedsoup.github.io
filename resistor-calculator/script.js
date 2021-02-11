function submit() {
    var band1 = document.getElementById('band1').value;
    var band2 = document.getElementById('band2').value;
    var multiplier = document.getElementById('multiplier').value;
    var tolerance = document.getElementById('tolerance').value;
    var resistance = parseFloat((parseInt(band1.toString(10) + band2.toString(10), 10) * multiplier).toPrecision(11));
    if (multiplier > 1) {
        switch (resistance.toString(10).length) {
            case 4:
                resistance = `${(resistance/1000)}K`;
                break;

            case 5:
                resistance = `${(resistance/1000)}K`;
                break;

            case 6:
                resistance = `${(resistance/1000)}K`;
                break;

            case 7:
                resistance = `${(resistance/1000000)}M`;
                break;

            case 8:
                resistance = `${(resistance/1000000)}M`;
                break;

            case 9:
                resistance = `${(resistance/1000000)}M`;
                break;

            case 10:
                resistance = `${(resistance/1000000000)}G`;
                break;

            case 11:
                resistance = `${(resistance/1000000000)}G`;
                break;
        }
    }
    // document.getElementById("result").innerHTML = `${resistance}Ω ${tolerance}%`;
    document.getElementById("result").value = `${resistance}Ω with ${tolerance}% tolerance`;
}

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
}


function drawResistor() {
    var c = document.getElementById("resistorCanvas");
    const canvasWidth = c.clientWidth;
    const canvasHeight = c.clientHeight;
    var ctx = c.getContext("2d");
    drawLine(ctx, 0, canvasHeight * 1 / 2, canvasWidth * 1 / 6, canvasHeight * 1 / 2);
    drawLine(ctx, canvasWidth * 5 / 6, canvasHeight * 1 / 2, canvasWidth, canvasHeight * 1 / 2);
    ctx.fillRect(canvasWidth * 1 / 6, canvasHeight * 1 / 4, canvasWidth * 4 / 6, canvasHeight * 1 / 2);
    ctx.fillStyle = "#F6E8B1"
    ctx.fillRect(canvasWidth * 1 / 5.9, canvasHeight * 1 / 3.9, canvasWidth * 4 / 6.05, canvasHeight * 1 / 2.05);
    ctx.stroke()
    ctx.stroke()
    ctx.stroke()
}

drawResistor()

function bandColourSetup(band, colour = "#FFFFFF") {
    var c = document.getElementById("resistorCanvas");
    const canvasWidth = c.clientWidth;
    const canvasHeight = c.clientHeight;
    var ctx = c.getContext("2d");

    switch (band) {
        case 1:
            x = 2.5 * (canvasWidth / 12)
            y = (canvasHeight / 4) + 1
            w = (canvasWidth / 12)
            h = (canvasHeight / 2) - 2
            break;

        case 2:
            x = 4.5 * (canvasWidth / 12)
            y = (canvasHeight / 4) + 1
            w = (canvasWidth / 12)
            h = (canvasHeight / 2) - 2
            break;

        case 3:
            x = 6.5 * (canvasWidth / 12)
            y = (canvasHeight / 4) + 1
            w = (canvasWidth / 12)
            h = (canvasHeight / 2) - 2
            break;

        case 4:
            x = 8.5 * (canvasWidth / 12)
            y = (canvasHeight / 4) + 1
            w = (canvasWidth / 12)
            h = (canvasHeight / 2) - 2
            break;
    }

    ctx.fillStyle = colour;
    ctx.fillRect(x, y, w, h);

}
bandColourSetup(1, "#000000")
bandColourSetup(2, "#000000")
bandColourSetup(3, "#000000")
bandColourSetup(4, "#A52A2A")

function bandColour(bandNum) {
    var colour
    switch (bandNum) {
        case 1:
            value = parseInt(document.getElementById('band1').value, 10);
            switch (value) {
                case 0:
                    colour = "#000000"
                    break;
                case 1:
                    colour = "#A52A2A"
                    break;
                case 2:
                    colour = "#FF0000"
                    break;
                case 3:
                    colour = "#FFA500"
                    break;
                case 4:
                    colour = "#FFFF00"
                    break;
                case 5:
                    colour = "#008000"
                    break;
                case 6:
                    colour = "#0000FF"
                    break;
                case 7:
                    colour = "#EE82EE"
                    break;
                case 8:
                    colour = "#808080"
                    break;
                case 9:
                    colour = "#FFFFFF"
                    break;
                default:
                    console.log("oops")
            }
            break;
        case 2:
            value = parseInt(document.getElementById('band2').value, 10);
            switch (value) {
                case 0:
                    colour = "#000000"
                    break;
                case 1:
                    colour = "#A52A2A"
                    break;
                case 2:
                    colour = "#FF0000"
                    break;
                case 3:
                    colour = "#FFA500"
                    break;
                case 4:
                    colour = "#FFFF00"
                    break;
                case 5:
                    colour = "#008000"
                    break;
                case 6:
                    colour = "#0000FF"
                    break;
                case 7:
                    colour = "#EE82EE"
                    break;
                case 8:
                    colour = "#808080"
                    break;
                case 9:
                    colour = "#FFFFFF"
                    break;
            }
            break;
        case 3:
            value = parseFloat(document.getElementById('multiplier').value, 10);
            switch (value) {
                case 1:
                    colour = "#000000"
                    break;
                case 10:
                    colour = "#A52A2A"
                    break;
                case 100:
                    colour = "#FF0000"
                    break;
                case 1000:
                    colour = "#FFA500"
                    break;
                case 10000:
                    colour = "#FFFF00"
                    break;
                case 100000:
                    colour = "#008000"
                    break;
                case 1000000:
                    colour = "#0000FF"
                    break;
                case 10000000:
                    colour = "#EE82EE"
                    break;
                case 100000000:
                    colour = "#808080"
                    break;
                case 1000000000:
                    colour = "#FFFFFF"
                    break;
                case 0.1:
                    colour = "#FFD700"
                    break;
                case 0.01:
                    colour = "#C0C0C0"
                    break;
            }
            break;
        case 4:
            value = parseFloat(document.getElementById('tolerance').value, 10);
            switch (value) {
                case 1:
                    colour = "#A52A2A"
                    break;
                case 2:
                    colour = "#FF0000"
                    break;
                case 0.5:
                    colour = "#008000"
                    break;
                case 0.25:
                    colour = "#0000FF"
                    break;
                case 0.1:
                    colour = "#EE82EE"
                    break;
                case 0.05:
                    colour = "#808080"
                    break;
                case 5:
                    colour = "#FFD700"
                    break;
                case 10:
                    colour = "#C0C0C0"
                    break;
            }
            break;
    }
    bandColourSetup(bandNum, colour)
    console.log(bandNum)
    console.log(colour)
}