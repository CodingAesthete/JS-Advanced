function numbersCheck(arr) {
     let matrix=arr.map(x=>x.split(" ").map(Number));
     let firstD=0;
     for(let i=0; i<matrix.length; i++){
         firstD+=matrix[i][i];
     }
     let secondD=0;
     for(let i=0; i<matrix.length; i++){
        secondD+=matrix[i][matrix.length-1-i];
    }
    if(firstD==secondD){
        for(let e=0; e<matrix.length; e++){
            for(let a=0; a<matrix.length; a++){
                if(e!=a && e!=matrix.length-1-a){
                    matrix[e][a]=firstD
                }
            }
        }
        matrix.forEach(element => {
            console.log(element.join(" "))
        });
    }
    else{
        matrix.forEach(element => {
            console.log(element.join(" "))
        });
    }
}