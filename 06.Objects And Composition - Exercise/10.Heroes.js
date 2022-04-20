function solve() {
    function canCast(state){
        state.cast=(spell)=>{
            console.log(`${state.name} cast ${spell}`)
            state.mana--;
        }
    }
    function canFight(state){
        state.fight=() =>{
            console.log(`${state.name} slashes at the foe!`)
            state.stamina--;
        }
    }
    function mage(name){
        let obj={
            name,
            health: 100,
            mana: 100
        }
        return Object.assign(obj,canCast(obj));
    }
    function fighter(name){
        let obj={name,
        health: 100,
        stamina: 100
        }
        return Object.assign(obj,canFight(obj));
    }
    return{
        fighter,mage
    }
}