function numbersCheck(steps, meters, kmPerHour) {
    let distance=steps*meters;
    let mPerS= (kmPerHour*1000)/3600;
    let times=Math.floor(distance/500)
    let all=distance/mPerS+times*60;
    let hours=Math.floor(all/3600);
    all-=hours*3600;
    let mins=Math.floor(all/60);
    all-=mins*60;
    let seconds=Math.ceil(all);
    if(hours==0){
        hours='00'
    }
    if(mins==0){
        mins='00'
    }
    if(seconds==0){
        seconds='00'
    }
    if(hours>0 &&hours<9){
        hours='0'+hours
    }
    if(mins>0 &&mins<9){
        mins='0'+mins
    }
    if(seconds>0 &&seconds<9){
        seconds='0'+seconds
    }
    console.log(`${hours}:${mins}:${seconds}`)
}