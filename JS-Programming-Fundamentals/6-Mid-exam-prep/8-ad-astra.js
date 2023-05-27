function reception(array) {
    let employeeOne = 0
    let employeeTwo = 0
    let employeeThree = 0
    let totalStudents = Number(array[3])
    let buffer = totalStudents
    let countHour = 0

    while (buffer > 0) {

        countHour++

        if (countHour % 4 == 0) {
            countHour++
        }

        employeeOne += Number(array[0])
        employeeTwo += Number(array[1])
        employeeThree += Number(array[2])
        let sum = employeeOne + employeeThree + employeeTwo
        buffer = totalStudents - sum
    }

    console.log(`Time needed: ${countHour}h.`);

}
reception(['3', '2', '5', '40'])