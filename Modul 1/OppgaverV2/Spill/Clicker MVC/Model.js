let model = {
    points: 0,
    pointsUpgrade: 1,
    whichClicking: 1,
    pointsPerSecond: 1,
    pointsPerMousepowerUpgrade: 0,
    workerIncome: 4,
    monkeyIncome1: 30,
    globalIncome: 0,
    price: 20,
    workerPrice: 100,
    workerCount: 0,
    monkeyPrice: 500,
    monkeyCount: 0,
    monkeyUpgradePrice: 5000,
    monkeyUpgradeCount: 0,
    workerUpgradePrice: 500,
    workerUpgradeCount: 0,
    hideClickerUpgrade: 'none',
    hideWorkerUpgrade: 'none',
    hideUpgradesUpgrades: 'none',
    hideIncome: 'none',
    hideMonkey: 'none',
    buttonText: 'Mousepower lvl 1',
    //functions
    counting: function() {
        this.points = this.points + this.pointsUpgrade
        this.hideOrNot1()
        this.hideOrNot2()
        this.hideOrNot3()
        updatePoints()
        updateView()
        
    },
    makeGlobalIncome: function() {
        if (this.workerCount >= 1) {
            this.globalIncome = this.workerIncome * this.workerCount
        }
        if (this.monkeyCount >= 1) {
            this.globalIncome = (this.monkeyIncome1 * this.monkeyCount) + (this.workerIncome * this.workerCount)
        }
    },
    hideOrNot1: function() {
        if (this.points >= this.price)
        this.hideClickerUpgrade = 'block'
    },
    hideOrNot2: function() {
        if (this.points >= this.workerPrice) 
        this.hideWorkerUpgrade = 'block'
    },
    hideOrNot3: function () {
        if (this.points >= this.workerUpgradePrice)
        this.hideUpgradesUpgrades = 'block'
    },
    //worker
    hire1Worker: function () {
        if (this.points < this.workerPrice) return; 
        removePoints(this.workerPrice)
        this.hideIncome = 'block'
        setInterval(function(){ model.income()}, 1000)
        this.workerCount++
        // model.globalIncome += model.workerIncome
        this.makeGlobalIncome()
        updatePoints()
        updateView()
        
    },
    income: function () {
        this.points+=this.workerIncome
        updatePoints()
        this.hideOrNot1()
        this.hideOrNot2()
        this.hideOrNot3()
    },
    //workerUpgrade
    workerUpgrade() {
        this.workerUpgradePrice = ((500 * 5) * (1+(this.workerUpgradeCount)))
        if (this.workerCount >= 1) {
            this.points -= this.workerUpgradePrice
            this.workerIncome = this.workerIncome * 2
            this.workerUpgradeCount++
            this.makeGlobalIncome()
            console.log(this.globalIncome, this.workerIncome )
            updateView()
    }
    },
    //monkey
    
    hire2Monkey: function () {
        if (this.points < this.monkeyPrice) return; 
        removePoints(this.monkeyPrice)
        this.hideIncome = 'block'
        this.hideMonkey = 'block'
        setInterval(function(){ model.monkeyIncome()}, 1000)
        this.monkeyCount++
        // model.globalIncome += model.monkeyIncome1
        this.makeGlobalIncome()
        updateView()
    },
    monkeyIncome: function () {
        this.points+=this.monkeyIncome1
        updatePoints()
    },
    //monkeyUpgrade
    monkeyUpgrade() {
        this.monkeyUpgradePrice = ((1000 * 5) * (1+(this.monkeyUpgradeCount)))
        if (this.monkeyCount >= 1) {
            this.points -= this.monkeyUpgradePrice
            this.monkeyIncome1 = this.monkeyIncome1 * 2
            this.monkeyUpgradeCount++
            this.makeGlobalIncome()
            updatePoints()
            updateView()

        }
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
        updatePoints()
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