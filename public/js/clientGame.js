(function(){
    "use strict";
    const PERSO_PANEL = document.getElementById('personnage_panel');
    class Elements_stat{
        constructor(elements){
            this.earth = elements.earth || 0;
            this.fire = elements.fire || 0;
            this.nature = elements.nature || 0;
            this.wind = elements.wind || 0;
            this.water = elements.water || 0;
            this.lightning = elements.lightning || 0;
            this.arcane = elements.arcane || 0;
        }
        
    }
    class Resistances extends Elements_stat{
        constructor(elements){
            super(elements);
        }
    }
    class Bonus extends Elements_stat{
        constructor(elements){
            super(elements);
        }
    }
    class Personnage{
        constructor(name,stats){
            this.name = name || 0;
            if(stats){
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
                this.resistances = new Resistances(stats.resists);
                this.bonus = new Bonus(stats.bonus);
            }
        }
    }
    class BtnStat{
        constructor(name,value){
            this.name = name || "none";
            this.value = value || "0";
        }
        getLabel(){
            let label = document.createElement('span');
            label.textContent = this.name;
            return label;
        }
        getValue(){
            let value = document.createElement('span');
            value.textContent = this.value;
            return value;
        }
        getElement(){
            let wraper = document.createElement('div');
            let btn = document.createElement('button');
            wraper.appendChild(this.getLabel());
            wraper.appendChild(this.getValue());
            wraper.appendChild(btn);
            return wraper;
        }
    }
    class FichePersonnage{
        constructor(perso){
            this.perso = perso || new Personnage();
        }
        show(){
            var 
        }
    }
})()