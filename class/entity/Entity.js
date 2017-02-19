class Entity{
    constructor(){
        
    }
    serialize(){
        var json = {};
        for(let i in this){
            if(i != "_id"){
                res[i] = this[i].value;
            }
        }
        return json;
    }
    deserialize(obj){
        var object = this;
        for(let i in obj){
            if(i in this){
                object[i].value = obj[i];
            }
        }
        return object;
    }
    getSchema(){
        var schema = {}
        for(let i in this){
            var elem = {}
            for(let j in this[i]){
                if(j != 'value'){
                    elem[j] = this[i][j];
                }
            }
            schema[i] = elem;
        }
        return schema;
    }

}
module.exports = Entity;