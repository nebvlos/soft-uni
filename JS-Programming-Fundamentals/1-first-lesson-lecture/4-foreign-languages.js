function check(country) {
    //  *---- with IF statements-----* 
    //  if (country== "England" || country=="USA"){
    //         console.log("English");
    //     }
    //     else if (country== "Spain" || country== "Argentina" || country== "Mexico"){
    //         console.log("Spanish");
    //     }
    //     else {
    //         console.log("unknown");
    //     }

    // *---- with SWITCH CASE ----*
    switch (country) {
        case "USA":
        case "England":
            console.log("English");
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
    }
}
check("Argentina")