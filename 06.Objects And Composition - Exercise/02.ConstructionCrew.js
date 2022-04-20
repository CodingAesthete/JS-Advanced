function createAssemblyLine(obj) {
    if(obj.dizziness.toString()=="false"){
        return obj;
    }
    else{
        let amount=0.1*obj.weight*obj.experience;
        obj.levelOfHydrated+=amount;
        obj.dizziness=false;
    }
    return obj;
}