 let input;{}
    while (true) {
        let input = prompt("Enter odd number between 1-50:");
        console.log(input);
        if (input >= 1 && input <= 50 && input % 2 !== 1) {
            break;
        }
        // console.log("Skip number: " + input);
        for (let i = 1; i <= 50; i += 1) {
            if (i == input) {
                console.log("Skip number: " + input);
                continue;
            }
            console.log("This an odd number: " + i);
        }
    }
