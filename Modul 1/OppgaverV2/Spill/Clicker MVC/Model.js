let model = {
    points: 0,
    pointsUpgrade: 1,
    whichClicking: 1,
    price: 20,
    hide: 'none',
    counting: function() {
        this.points = this.points + this.pointsUpgrade, 
         updateView()
    },
    hideOrNot1: function() {
        if (this.points >= this.price) 
        this.hide = 'block', updateView()
    },
    clickerUpgrade1: function() {
        if (this.points < this.price) 
        return; removePoints(this.price), 
        this.pointsUpgrade=2, 
        this.price = 50, 
        this.hide = "none", 
        this.whichClicking++,
        updateView()
    },
    clickerUpgrade2: function() {
        this.clickerUpgrade1.apply(this),
        this.pointsUpgrade = 5, 
        this.price = 150
        console.log("upgrade2")
    },
    clickerUpgrade3: function() {
        this.clickerUpgrade2.apply(this),
        this.pointsUpgrade= 12, 
        this.price = 400
        console.log("upgrade3")
    },
    clickerUpgrade4: function() {
        this.clickerUpgrade3.apply(this),
        this.pointsUpgrade = 31, 
        this.price = 800
        console.log("upgrade4") 
    },
    clickerUpgrade5: function () {
        this.clickerUpgrade4.apply(this),
        this.pointsUpgrade = 82,
        this.price = 1400
        console.log("upgrade5")
    },
    clickerUpgrade6: function () {
        this.clickerUpgrade4.apply(this),
        this.pointsUpgrade = 202,
        this.price = 2800
        console.log("upgrade6")
    },
    clickerUpgrade7: function () {
        this.clickerUpgrade4.apply(this),
        this.pointsUpgrade = 391,
        this.price = 5600
        console.log("upgrade7")
    },
    clickerUpgrade8: function () {
        this.clickerUpgrade4.apply(this),
        this.pointsUpgrade = 893,
        this.price = 11200,
        console.log("upgrade8")
    },
    clickerUpgrade9: function () {
        this.clickerUpgrade4.apply(this),
        this.pointsUpgrade = 1999,
        this.price = 19999,
        console.log("upgrade9")
    },
}