function updateView() {
    document.getElementById('content').innerHTML = `
    <div class='everythingDiv'>
        <button id="clicker" onclick="model.counting(), consolelog()">Suspicious button</button>
        
        <div class="income">+${model.pointsUpgrade} Per click</div>
        </br>
        <button class="tooltip clickUpgrade" id="Upgrade1" style="display:${model.hideClickerUpgrade}" onclick="model.clickerUpgrade${model.whichClicking}(), updateView()";>${model.buttonText}<span class="tooltiptext">Price: ${model.price} </br> + ${model.pointsUpgrade}</span></button>
        </br>

        <div class='upgradesBox' style='display:${model.hideWorkerUpgrade}'>
            <h3 class='AutomaticHeadline'>Automatic Clickers!</h3>
            <button class="tooltip mouseClickerButton" onclick='model.hire1Worker()'>Hire trained worker<span class="tooltiptext">+${model.workerIncome} Per second </br> Price: ${model.workerPrice} </span></button>
            <div class='mouseClickerDiv'>: ${model.workerCount}</div>
            <button onclick='model.hire2Monkey()'class='monkeyButton tooltip'>Hire monkey<span class="tooltiptext">+${model.monkeyIncome1} Per second </br> Price: 500 </span></button>
            <div class='monkeyDiv'>: ${model.monkeyCount}</div>
            <div class='perSec'>${model.globalIncome} per second</div>
        </div>

        <div class='upgradeUpgradesBox' style='display:${model.hideUpgradesUpgrades}'>
            <h3 class='AutomaticHeadline'>Auto Clickers Upgrades!</h3>
            <button class="tooltip mouseClickerButton" onclick='model.workerUpgrade()'>Train trained worker<span class="tooltiptext"> 2 * Mouseclicker efficiency </br> Cost: ${model.workerUpgradePrice}</span></button>
            <div class='workerUpgradeCount'>: ${model.workerUpgradeCount}</div>

            <button class="tooltip mouseClickerButton" onclick='model.monkeyUpgrade()'>Give monkey a banana<span class="tooltiptext"> 2 * Monkey efficiency</br> Cost: ${model.monkeyUpgradePrice}</span></button>
            <div class='monkeyUpgradeCount'>: ${model.monkeyUpgradeCount}</div>
        </div
    </div>
    `; 
};
function updatePoints() {
    document.getElementById('points').innerHTML = `
    <div class="points">${model.points}</div>`
}