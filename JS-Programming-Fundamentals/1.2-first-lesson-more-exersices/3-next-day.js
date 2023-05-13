function nextDay(year, month, day) {
    var today = new Date(year, month, day)
    today.setDate(today.getDate() + 1)
    console.log(today);
}
nextDay(2016, 9, 30)