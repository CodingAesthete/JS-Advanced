function attachGradientEvents() {
    let grad=document.getElementById('gradient');
    grad.addEventListener('mousemove', onMouseMove);
    function onMouseMove(event){
        let target= event.target;
        let percent=
        Math.floor(Number(event.offsetX)/Number(target.clientWidth)*100);
        document.getElementById('result').textContent=`${percent}%`
    }
}