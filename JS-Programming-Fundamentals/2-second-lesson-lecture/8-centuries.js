function centuriesToMinutes(numCenturies) {
    let years = numCenturies * 100
    let days = Math.trunc(numCenturies * 36524.2422)
    let hours = days * 24
    let minutes = 60 * hours
    console.log(`${numCenturies} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuriesToMinutes(5)