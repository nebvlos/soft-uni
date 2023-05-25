function houseParty(guests) {
    let listOfGuests = []

    for (let i = 0; i < guests.length; i++) {

        let element = guests[i].split(' ')
        let nameOfGuest = element[0]
        let action = ''

        if (element.length == 3) {
            action = element[element.length - 1]
        }
        else {
            action = element[element.length - 2] + ' ' + element[element.length - 1]
        }

        let result = listOfGuests.indexOf(nameOfGuest)

        if (action == 'going!') {
            if (result == -1) {
                listOfGuests.push(nameOfGuest)
            }
            else {
                console.log(`${nameOfGuest} is already in the list!`);
            }
        }
        else {
            if (result == -1) {
                console.log(`${nameOfGuest} is not in the list!`);
            }
            else {
                let index = listOfGuests.indexOf(nameOfGuest)
                listOfGuests.splice(index, 1)
            }
        }
    }
    console.log(listOfGuests.join('\n'));

}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])