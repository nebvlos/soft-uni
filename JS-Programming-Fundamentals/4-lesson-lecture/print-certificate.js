function printCertificate(grade, names) {
    // print Header 

    // get Full Name
    let fullName = printFullName(names)

    // get Grade
    let formattedGrade = formatGrade(grade)

    if (pass(grade)) {
        printHeader()
        console.log(fullName);
        console.log(formattedGrade);
    }
    else {
        let msg = `${fullName} does not qualify`
        console.log(msg);
    }

}

function printHeader() {
    console.log(` ~~~-   {@}   -~~~`)
    console.log(`~- Certificate -~`)
    console.log(`~~~-  ~---~  -~~~`);
}

function printFullName(names) {
    return `${names[0]} ${names[1]}`
}

function formatGrade(grade) {

    if (grade < 3) {
        return `Fail (2)`;
    }
    else if (grade >= 3 && grade < 3.50) {
        return `Poor (${(grade).toFixed(2)})`;
    }
    else if (grade >= 3.50 && grade < 4.50) {
        return `Good (${(grade).toFixed(2)}`;
    }
    else if (grade >= 4.50 && grade < 5.50) {
        return `Very good (${(grade).toFixed(2)})`;
    }
    else {
        return `Excellent (${(grade).toFixed(2)})`;
    }
}

function pass(grade) {
    return grade >= 3
}

printCertificate(2.99, ['Peter', 'Carter']);