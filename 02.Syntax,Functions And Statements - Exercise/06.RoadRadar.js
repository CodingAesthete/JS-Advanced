function numbersCheck(kms, place) {
    let act = 0;
    let aus = "";
    if (place == "motorway") {
        act = 130 - kms;
        if (act >= 0) {
            console.log(`Driving ${kms} km/h in a 130 zone`);
        }
        else {
            if (act >= -20) {
                aus = "speeding"
            }
            else if (act < -20 && act >= -40) {
                aus = "excessive speeding"
            }
            else{
                aus="reckless speeding"
            }
            console.log(`The speed is ${Math.abs(act)} km/h faster than the allowed speed of 130 - ${aus}`);
        }
    }
    else if (place == "interstate") {
        act = 90 - kms
        if (act >= 0) {
            console.log(`Driving ${kms} km/h in a 90 zone`);
        }
        else {
            if (act >= -20) {
                aus = "speeding"
            }
            else if (act < -20 && act >= -40) {
                aus = "excessive speeding"
            }
            else{
                aus="reckless speeding"
            }
            console.log(`The speed is ${Math.abs(act)} km/h faster than the allowed speed of 90 - ${aus}`);
        }
    }
    else if (place == "city") {
        act = 50 - kms
        if (act >= 0) {
            console.log(`Driving ${kms} km/h in a 50 zone`);
        }
        else {
            if (act >= -20) {
                aus = "speeding"
            }
            else if (act < -20 && act >= -40) {
                aus = "excessive speeding"
            }
            else{
                aus="reckless speeding"
            }
            console.log(`The speed is ${Math.abs(act)} km/h faster than the allowed speed of 50 - ${aus}`);
        }
    }
    else if (place == "residential") {
        act = 20 - kms
        if (act >= 0) {
            console.log(`Driving ${kms} km/h in a 20 zone`);
        }
        else {
            if (act >= -20) {
                aus = "speeding"
            }
            else if (act < -20 && act >= -40) {
                aus = "excessive speeding"
            }
            else{
                aus="reckless driving"
            }
            console.log(`The speed is ${Math.abs(act)} km/h faster than the allowed speed of 20 - ${aus}`);
        }
    }
}