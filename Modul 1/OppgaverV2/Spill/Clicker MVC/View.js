function updateView() {
    document.getElementById('content').innerHTML = `
        <button id="clicker" onclick="model.counting(), model.hideOrNot1(), consolelog()">Click me</button>
        <div class="points">${model.points}</div>
        <div>+${model.pointsUpgrade}</div>
        </br>
        <button class="tooltip" id="Upgrade1" style="display:${model.hide}" onclick="model.clickerUpgrade${model.whichClicking}(), updateView()";>Upgrade mousepower<span class="tooltiptext">Price: ${model.price}</span></button>
    `;
};