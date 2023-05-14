function rightPlace(firstString, character, secondString) {
    // *---- with for loop and if ---* 
    // let countName= ''
    // let countChar=''
    // let replace=''
    // for (let i= 0; i< firstString.length; i++){
    //     countChar=firstString[i]
    //     if (countChar=="_"){
    //         replace=character
    //         countName+=replace
    //     }
    //     else {
    //         countName+=firstString[i]
    //     }
    // }
    // if (countName==secondString){
    //     console.log(`Matched`);
    // }
    // else {
    //     console.log(`Not Matched`);
    // }
    // }

    // *---- with replace () ----*

    if (firstString.replace("_", character) == secondString) {
        console.log(`Matched`);
    }
    else {
        console.log(`Not Matched`);
    }
}
rightPlace('Str_ng', 'I', 'Strong')