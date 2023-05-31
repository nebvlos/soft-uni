function employees(employeeData) {

    class Employee {
        constructor(employeeName, employeeNumber) {
            this.name = employeeName
            this.number = employeeNumber
        }
        result() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.number} `);
        }
    }

    for (let i = 0; i < employeeData.length; i++) {
        let employeeName = employeeData[i].split().toString()
        let employeeNumber = employeeName.length

        let employee = new Employee(employeeName, employeeNumber)
        employee.result()
    }
}

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
)