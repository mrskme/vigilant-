function updateView() {
    document.getElementById('content').innerHTML = `
        <button id="clicker" onclick="model.counting(), model.hideOrNot1(), updateView(), consolelog()">Suspicious button</button>
        <div class="points">${model.points}</div>
        <div>+${model.pointsUpgrade}</div>
        </br>
<button class="tooltip" id="Upgrade1" style="display:${model.hide}" onclick="model.clickerUpgrade${model.whichClicking}(), updateView()";>${model.buttonText}<span class="tooltiptext">Price: ${model.price}</span></button>
    `;
};