let model = {
    points: 0,
    pointsUpgrade: 1,
    whichClicking: 1,
    pointsPerSecond: 1,
    pointsPerMousepowerUpgrade: 0,
    incomeVar: 0,
    globalIncome: 0,
    monkeyIncome1: 0,
    monkeyIncomeVar: 0,
    price: 20,
    workerPrice: 100,
    workerCount: 0,
    monkeyPrice: 500,
    monkeyCount: 0,
    hideClickerUpgrade: 'none',
    hideWorkerUpgrade: 'none',
    hideIncome: 'none',
    hideMonkey: 'none',
    buttonText: 'Mousepower lvl 1',


    //functions
    counting: function() {
        this.points = this.points + this.pointsUpgrade
        this.hideOrNot1()
        this.hideOrNot2()
        updateView()
    },
    hideOrNot1: function() {
        if (this.points >= this.price) 
        this.hideClickerUpgrade = 'block', updateView()
    },
    hideOrNot2: function() {
        if (this.points >= this.workerPrice) 
        this.hideWorkerUpgrade = 'block', updateView()
    },
    //worker
    hire1Worker: function () {
        if (this.points < this.workerPrice) return; 
        removePoints(this.workerPrice)
        this.hideIncome = 'block'
        this.incomeVar = 4
        this.globalIncome += 4
        setInterval(function(){ model.income()}, 1000)
        this.workerCount++
        updateView()
    },
    income: function () {
        this.points+=this.incomeVar
        updateView()
        this.hideOrNot1()
        this.hideOrNot2()
    },
    //workerUpgrade
    workerUpgrade() {
        this.incomeVar *= 2
        this.globalIncome *= 2
        updateView()
    },
    //monkey
    hire2Monkey: function () {
        if (this.points < this.monkeyPrice) return; 
        removePoints(this.monkeyPrice)
        this.hideMonkey = 'block'
        this.monkeyIncomeVar = 30
        this.globalIncome += 30
        setInterval(function(){ model.monkeyIncome()}, 1000)
        this.monkeyCount++
        console.log("incomeVar: " + this.monkeyIncomeVar, "globalIncome: " +  this.globalIncome, "workerCount" + this.workerCount)
        updateView()
    },
    monkeyIncome: function () {
        this.points+=this.monkeyIncomeVar
        updateView()
    },
    //monkeyUpgrade
    monkeyUpgrade() {
        this.monkeyIncomeVar *= 2
        this.globalIncome *= 2
        updateView()
    },
    //mouseUpgrade
    clickerUpgrade1: function() {
        if (this.price >= this.points) return; 
        removePoints(this.price),
        this.price = 50,
        this.pointsUpgrade=2,
        this.hideClickerUpgrade = "block",
        this.whichClicking++
        this.buttonText = 'Mousepower lvl ' + this.whichClicking
        console.log(this.price)
    },
    










    //extends/extenders/extenderinos
    clickerUpgrade2: function() {
        if (this.price >= this.points) return;
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 5
        this.price = 150
        console.log("upgrade2")
    },
    clickerUpgrade3: function() {
        if (this.price >= this.points) return;
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade= 12
        this.price = 400
        console.log("upgrade3")
    },
    clickerUpgrade4: function() {
        if (this.price >= this.points) return;
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 31
        this.price = 800
        console.log("upgrade4") 
    },
    clickerUpgrade5: function () {
        if (this.price >= this.points) return;
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 82
        this.price = 1400
        console.log("upgrade5")
    },
    clickerUpgrade6: function () {
        if (this.price >= this.points) return;
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 202
        this.price = 2800
        console.log("upgrade6")
    },
    clickerUpgrade7: function () {
        if (this.price >= this.points) return;
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 391
        this.price = 5600
        console.log("upgrade7")
    },
    clickerUpgrade8: function () {
        if (this.price >= this.points) return;
        this.clickerUpgrade1.apply(this)
        this.pointsUpgrade = 893
        this.price = 11200
        console.log("upgrade8")
    },
    clickerUpgrade9: function () {
        if (this.price >= this.points) return;
        this.clickerUpgrade4.apply(this)
        this.pointsUpgrade = 1999
        this.price = 19999
        console.log("upgrade9")
    },
}

//når man har 10 aper kan man kjøpe en automatic clicker upgrade som gir x2 på ape
// test ut prosent på height og width /top bottom for rezising