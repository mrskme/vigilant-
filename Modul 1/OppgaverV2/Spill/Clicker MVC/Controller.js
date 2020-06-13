// function nextUpgrade() {
//     parseInt(model.whichClicking);
//     
//     toString(model.whichClicking);
//     updateView();
//     console.log(model.whichClicking)
// };
function removePoints(ammount) {
    var pointsLeft = model.points - ammount;
    model.points = pointsLeft;}
            
function hire1Counter() {
    let workerDiv = document.getElementById("workerDiv")
    let workerInnerHTML = model.workerCount + " Trained workers"
    model.workerCount++
    workerDiv.innerHTML = workerInnerHTML
    console.log(workerDiv, workerInnerHTML, model.workerCount)
}
function consolelog() {
    console.log(model.pointsUpgrade)
}