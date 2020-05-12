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
  if (input >= 1 && input <= 10) {
    numbers[valgtStolpe] = input;
    show();
    return numbers;
  } else {
    alert("Velg et tall mellom 1 og 10");
  }
}

function fjernStolpe(valgtStolpe) {
  numbers.splice(valgtStolpe, 1);
  show();
  return numbers;
}
