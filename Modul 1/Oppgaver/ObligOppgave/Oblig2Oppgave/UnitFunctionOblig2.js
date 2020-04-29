var contentDiv = document.getElementById("content");
let HTML = "";
// model
let numbers = [7, 3, 1, 5, 8];
let disabledOrNot = "disabled";
let borderOrNot = "";
var valgtStolpe = 0;

// view
show();
function show() {
  var svgInnerHtml = "";
  for (let i = 0; i < numbers.length; i++) {
    svgInnerHtml += createBar(numbers[i], i + 1, valgtStolpe == i + 1);
  }
  HTML = `
                <svg id="chart" width="500" viewBox="0 0 80 60">
                    ${svgInnerHtml}
                </svg><br/>
                Valgt stolpe: <i>${valgtStolpe}</i>
                <br />
                Verdi:
                <input type="number" min="1" max="10" id="inputId" />
                <button onclick="leggTilStolpe()">Legg til stolpe</button>
                <button ${disabledOrNot} onclick="endreValgtStolpe()">Endre valgt stolpe</button><br />
                <button ${disabledOrNot} onclick="fjernStolpe()">Fjerne valgt stolpe</button>
                `;
}

function createBar(number, barNo, selected) {
  const width = 8;
  const spacing = 2;
  var x = (barNo - 1) * (width + spacing);
  var height = number * 7.5;
  var y = 60 - height;
  var color = calcColor(1, 10, barNo);
  if (selected) {
    borderOrNot = "black";
  } else {
    borderOrNot = "white";
  }
  return `<rect onclick="velgStolpe(${barNo})" width="${width}" height="${height}"
                                x="${x}" y="${y}" fill="${color}" stroke="${borderOrNot}"></rect>`;
}

function calcColor(min, max, val) {
  var minHue = 240,
    maxHue = 0;
  var curPercent = (val - min) / (max - min);
  var colString =
    "hsl(" + (curPercent * (maxHue - minHue) + minHue) + ",100%,50%)";
  return colString;
}

function velgStolpe(clickedStolpe) {
  disabledOrNot = "";
  if (valgtStolpe == clickedStolpe) {
    valgtStolpe = 0;
    disabledOrNot = "disabled";
  } else {
    valgtStolpe = clickedStolpe;
    return valgtStolpe;
  }
  show();
}

function leggTilStolpe(input) {
  let numbers = [7, 3, 1, 5, 8];
  // var input = document.getElementById("inputId").value;
  if (input >= 1 && input <= 10) {
    numbers.push(input);
    show();
    return numbers;
  } else {
    alert("Velg et tall mellom 1 og 10");
    return numbers;
  }
}

function endreValgtStolpe(input, valgtStolpe) {
  let numbers = [7, 3, 1, 5, 8];
  // var input = document.getElementById("inputId").value;
  if (input >= 1 && input <= 10) {
    numbers[valgtStolpe] = input;
    show();
    return numbers;
  } else {
    alert("Velg et tall mellom 1 og 10");
  }
}

function fjernStolpe(valgtStolpe) {
  let numbers = [7, 3, 1, 5, 8];
  numbers.splice(valgtStolpe, 1);
  show();
  return numbers;
}
