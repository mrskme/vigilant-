let model = {
    points: 0,
    pointsUpgrade: 1,
    whichClicking: 1,
    pointsPerSecond: 1,
    pointsRate: undefined,
    price: 20,
    workerPrice: 1,
    workerCount: 0,
    hideClickerUpgrade: 'none',
    hideWorkerUpgrade: 'none',
    buttonText: 'Mousepower lvl ' + this.whichClicking,
    // workerDiv: document.getElementById("workerDiv"),
    // workerInnerHTML: this.workerCount + " Trained workers",


    //functions
    counting: function() {
        this.points = this.points + this.pointsUpgrade
        this.hideOrNot1(), this.hideOrNot2(), updateView()
    },
    hideOrNot1: function() {
        if (this.points >= this.price) 
        this.hideClickerUpgrade = 'block', updateView()
    },
    hideOrNot2: function() {
        if (this.points >= this.workerPrice) 
        this.hideWorkerUpgrade = 'block', updateView()
    },
    hire1Worker: function () {
        if (this.points <= this.workerPrice) 
        return; removePoints(this.workerPrice)
        this.workerPrice = 500,
        setInterval(function(){model.income()}, 200)
        hire1Counter()
    },
    income: function () {
        this.pointsRate = this.points++
    },
    // hire1Counter: function () {
    //     this.workerCount++
    //     this.workerDiv.innerHTML = this.workerInnerHTML
    //     console.log(this.workerdiv, this.workerInnerHTML)
    // },
    clickerUpgrade1: function() {
        if (this.points <= this.price)
        return; removePoints(this.price)
        this.pointsUpgrade=2
        this.price = 50
        this.hideClickerUpgrade = "none"
        this.whichClicking++
        this.buttonText = 'Mousepower lvl 2',
        console.log(this.whichClicking)
    },










    //extends/extenders/extenderinos
    clickerUpgrade2: function() {
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 5
        this.price = 150
        this.buttonText = 'Mousepower lvl 3'
        console.log("upgrade2")
    },
    clickerUpgrade3: function() {
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade= 12
        this.price = 400
        this.buttonText = 'Mousepower lvl 4'
        console.log("upgrade3")
    },
    clickerUpgrade4: function() {
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 31
        this.price = 800
        this.buttonText = 'Mousepower lvl 5'
        console.log("upgrade4") 
    },
    clickerUpgrade5: function () {
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 82
        this.price = 1400
        this.buttonText = 'Mousepower lvl 6'
        console.log("upgrade5")
    },
    clickerUpgrade6: function () {
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 202
        this.price = 2800
        this.buttonText = 'Mousepower lvl 7'
        console.log("upgrade6")
    },
    clickerUpgrade7: function () {
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 391
        this.price = 5600
        this.buttonText = 'Mousepower lvl 8'
        console.log("upgrade7")
    },
    clickerUpgrade8: function () {
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 893
        this.price = 11200
        this.buttonText = 'Mousepower lvl 9'
        console.log("upgrade8")
    },
    clickerUpgrade9: function () {
        this.clickerUpgrade4.apply(this)
        this.pointsUpgrade = 1999
        this.price = 19999
        this.buttonText = 'Mousepower lvl 10'
        console.log("upgrade9")
    },
}