function updateView() {
    document.getElementById('content').innerHTML = `
        <button id='clicker' onclick=${model.click()}>Click me</button>
        <button id='Upgrade1'></button>
        <div id='counterView'>${model.counter}<div>
    `;
}
