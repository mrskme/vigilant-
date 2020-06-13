function updateView() {
    document.getElementById('content').innerHTML = `
        <button id="clicker" onclick="model.counting(), consolelog()">Suspicious button</button>
        <div class="points">${model.points}</div>
        <div>+${model.pointsUpgrade}</div>
        </br>
        <button class="tooltip" id="Upgrade1" style="display:${model.hideClickerUpgrade}" onclick="model.clickerUpgrade${model.whichClicking}(), updateView()";>${model.buttonText}<span class="tooltiptext">Price: ${model.price}</span></button>
        </br></br>
        <button style='display:${model.hideWorkerUpgrade}' onclick='model.hire1Worker()'>Hire trained mouseclicker</button>
        <div id="workerDiv"></div>
    `;
};