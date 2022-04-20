function attachEventsListeners() {
    let days=document.getElementById('days');
    let hours=document.getElementById('hours');
    let minutes=document.getElementById('minutes');
    let seconds=document.getElementById('seconds');
    let daysBtn=document.getElementById('daysBtn');
    let hoursBtn=document.getElementById('hoursBtn');
    let minutesBtn=document.getElementById('minutesBtn');
    let secondsBtn=document.getElementById('secondsBtn');
    daysBtn.addEventListener('click',onClick1);
    hoursBtn.addEventListener('click',onClick2);
    minutesBtn.addEventListener('click',onClick3);
    secondsBtn.addEventListener('click',onClick4);
    function onClick1(event){
        let daysa=days.value;
        hours.value=daysa*24;
        minutes.value=daysa*24*60;
        seconds.value=daysa*24*60*60;
    }
    function onClick2(event){
        let houra=hours.value;
        days.value=houra/24;
        minutes.value=houra*60;
        seconds.value=houra*60*60;
    }
    function onClick3(event){
        let minuta=minutes.value;
        days.value=minuta/24/60;
        hours.value=minuta/60;
        seconds.value=minuta*60;
    }
    function onClick4(event){
        let seconda=seconds.value;
        days.value=seconda/60/60/24;
        hours.value=seconda/60/60;
        minutes.value=seconda/60;
    }
}