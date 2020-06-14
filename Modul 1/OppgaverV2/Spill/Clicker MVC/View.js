function updateView() {
    document.getElementById('content').innerHTML = `
    <div class='everythingDiv'>
        <button id="clicker" onclick="model.counting(), consolelog()">Suspicious button</button>
        <div class="points">${model.points}</div>
        <div class="income">+${model.pointsUpgrade} Per click</div>
        <div class='perSec' style='display:${model.hideIncome}'>${model.globalIncome} per second</div>
        </br>
        <button class="tooltip" id="Upgrade1" style="display:${model.hideClickerUpgrade}" onclick="model.clickerUpgrade${model.whichClicking}(), updateView()";>${model.buttonText}<span class="tooltiptext">Price: ${model.price} </br> + ${model.pointsUpgrade}</span></button>
        </br>

        <div class='upgradesBox' style='display:${model.hideWorkerUpgrade}'>
            <h3 class='AutomaticHeadline'>Automatic Clickers!</h3>
            <button class="tooltip mouseClickerButton" onclick='model.hire1Worker()'>Hire trained mouseclicker<span class="tooltiptext">+4 Per second </br> Price: ${model.workerPrice} </span></button>
            <div class='mouseClickerDiv' style='display:${model.hideIncome}'>: ${model.workerCount}</div>
            <button onclick='model.hire2Monkey()'class='monkeyButton tooltip'>Hire monkey<span class="tooltiptext">+30 Per second </br> Price: 500 </span></button>
            <div style='display:${model.hideMonkey}'class='monkeyDiv'>: ${model.monkeyCount}</div>
        </div>

        <div class='upgradeUpgradesBox' style='display:${model.hideWorkerUpgrade}'>
            <h3 class='AutomaticHeadline'Auto Clickers Upgrades!</h3>
            <button class="tooltip mouseClickerButton" onclick='model.workerUpgrade()'>Train trained mouseclicker<span class="tooltiptext"> 2 * Mouseclicker efficiency</span></button>
            <button class="tooltip mouseClickerButton" onclick='model.monkeyUpgrade()'>Give monkey a banana<span class="tooltiptext"> 2 * Monkey efficiency</span></button>
        </div
    </div>
    `;
};