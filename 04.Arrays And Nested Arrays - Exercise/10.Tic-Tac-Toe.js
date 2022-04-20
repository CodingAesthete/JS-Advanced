function numbersCheck(arr) {
    let tic = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let checki = false;
    for (const tico of tic) {
        let tica = tico.map(x => x.toString())
        tic.pop();
        tic.unshift(tica)
    }
    let as = "";
    var val = "false"
    let s=-1;
    for (let i = 0; i < arr.length; i++) {
        s++;
        let curr = arr[i].split(" ")
        let row = Number(curr[0]);
        let column = Number(curr[1]);
        if (tic[row][column] != val) {
            s--;
            console.log
                ("This place is already taken. Please choose another!");
            continue;
        }
        if (s % 2 == 0) {
            tic[row][column] = "X"
            as = "X"
        }
        else {
            tic[row][column] = "O"
            as = "O"
        }
        for (let e = 0; e < tic.length; e++) {
            if (tic[e][0] === tic[e][1]
                && tic[e][0] === tic[e][2]
                && tic[e][0] !== "false") {
                console.log(`Player ${tic[e][0]} wins!`);
                for (const tico of tic) {
                    console.log(tico.join("\t"))
                }
                return;
            }
            if (tic[0][e] === tic[1][e]
                && tic[0][e] === tic[2][e]
                && tic[0][e] !== "false") {
                console.log(`Player ${tic[0][e]} wins!`);
                for (const tico of tic) {
                    console.log(tico.join("\t"))
                }
                return;
            }
            
        }
        if (tic[0][0] === tic[1][1]
            && tic[0][0] === tic[2][2]
            && tic[0][0] !== "false") {
            console.log(`Player ${tic[0][0]} wins!`);
            for (const tico of tic) {
                console.log(tico.join("\t"))
            }
            return;
        }
        if (tic[2][0] === tic[1][1]
            && tic[2][0] === tic[0][2]
            && tic[2][0] !== "false") {
            console.log(`Player ${tic[2][0]} wins!`);
            for (const tico of tic) {
                console.log(tico.join("\t"))
            }
            return;
        }
        let cheko=false;
        let cheko2=false;
        let cheko3=false;
        if(tic[0].includes("false")){
            cheko=true;
        }
        if(tic[1].includes("false")){
            cheko2=true;
        }
        if(tic[2].includes("false")){
            cheko3=true;
        }
        if(cheko==false && cheko2==false && cheko3==false){
            console.log("The game ended! Nobody wins :(")
            for (const tico of tic) {
                console.log(tico.join("\t"))
            }
            return;
        }
    }
    for (const tico of tic) {
        console.log(tico.join("\t"))
    }
}