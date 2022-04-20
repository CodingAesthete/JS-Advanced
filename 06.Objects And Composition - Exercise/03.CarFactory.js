function createAssemblyLine(obj) {
    let smallE={ power: 90, volume: 1800 };
    let normalE={ power: 120, volume: 2400 };
    let monsterE={ power: 200, volume: 3500 }
    var object={
        model: obj.model,
    }
    if(obj.power<=90){
        object.engine=smallE
    }
    else if(obj.power<=120){
        object.engine=normalE;
    }
    else if(obj.power<=200){
        object.engine=monsterE;
    }
    let hatchback={ type: 'hatchback', color: obj.color };
    let coupe={ type: 'coupe', color: obj.color };
    if(obj.carriage=='hatchback'){
        object.carriage=hatchback
    }
    else{
        object.carriage=coupe
    }
    let wheeles=[];
    if(obj.wheelsize%2==0){
        wheeles.push(obj.wheelsize-1)
        wheeles.push(obj.wheelsize-1)
        wheeles.push(obj.wheelsize-1)
        wheeles.push(obj.wheelsize-1)
    }
    else{
        wheeles.push(obj.wheelsize)
        wheeles.push(obj.wheelsize)
        wheeles.push(obj.wheelsize)
        wheeles.push(obj.wheelsize)
    }
    object.wheels=wheeles
    return object;
}