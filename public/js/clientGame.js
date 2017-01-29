(function () {
    "use strict";
    const PERSO_PANEL = document.getElementById('personnage_panel');
    class Elements_stat {
        constructor(elements) {
            if (elements) {
                this.earth = elements.earth || 0;
                this.fire = elements.fire || 0;
                this.nature = elements.nature || 0;
                this.wind = elements.wind || 0;
                this.water = elements.water || 0;
                this.lightning = elements.lightning || 0;
                this.arcane = elements.arcane || 0;

            }
        }
        getValues() {
            var res = {};
            for (let i in this) {
                res[i] = this[i];
            }
            return res;
        }

    }
    class Resists extends Elements_stat {
        constructor(elements) {
            super(elements);
        }
    }
    class Bonus extends Elements_stat {
        constructor(elements) {
            super(elements);
        }
    }
    class Personnage {
        constructor(name, stats) {
            this.name = name || " ";
            if (stats) {
                this.strength = stats.strength || 0;
                this.intel = stats.intel || 0;
                this.wisdom = stats.wisdom || 0;
                this.agility = stats.agility || 0;
                this.pvMax = stats.pvMax || 0;
                this.pv = stats.pv || 0;
                this.manaMax = stats.manaMax || 0;
                this.mana = stats.mana || 0;
                this.level = stats.level || 0;
                this.xp = stats.xp || 0;
                this.resists = new Resists(stats.resists || {});
                this.bonus = new Bonus(stats.bonus || {});
            }
        }
        getValues() {
            var res = {};
            for (let i in this) {
                if (typeof (this[i]) == "object") {
                    res[i] = this[i].getValues();
                } else {
                    res[i] = this[i];
                }
            }
            return res;
        }
    }
    class Htmlstat {
        constructor(name, value) {
            this.name = name || "none";
            this.value = value || "0";
            this.wraper = document.createElement('div');
        }
        getLabel() {
            let label = document.createElement('span');
            label.textContent = this.name;
            return label;
        }
        getValue() {
            let value = document.createElement('span');
            value.textContent = this.value;
            return value;
        }
        getBtn() {
            let btn = document.createElement('button');
            this.wraper.appendChild(this.getLabel());
            this.wraper.appendChild(this.getValue());
            this.wraper.appendChild(btn);
            return this.wraper;
        }
        get
    }
    class FichePersonnage {
        constructor(perso) {
            this.perso = perso || new Personnage("Noname", {});
        }
        show() {
            if (PERSO_PANEL.firstChild) {
                PERSO_PANEL.removeChild(PERSO_PANEL.firstChild);
            }
            let wrap = document.createElement('div');
            var stats = this.perso.getValues();
            console.log(stats)
            for (let i in stats) {
                if (typeof (stats[i]) == "object") {
                    //  res[i] = this[i].getValues();
                    
                 }
                 else if(i == "name"){
                     
                 }
                 else {
                    var htmlstat = new Htmlstat(i, stats[i]);
                    wrap.appendChild(testbtn.getbtn());
                }
            }
            PERSO_PANEL.appendChild(wrap)
        }
    }
    var p = new Personnage("vlad", {});
    var f = new FichePersonnage(p);
    f.show();

})()
98/147