function fixText(text) {
var text = text.trim();
var firstLetter = text.charAt(0).toUpperCase();
var rest = text.substring(1).toLowerCase();
return firstLetter+rest;
} //ossen skulle jeg brukt denne på en tekst