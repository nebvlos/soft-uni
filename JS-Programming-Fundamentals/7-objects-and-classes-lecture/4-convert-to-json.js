function converter(firstName, sirName, hair) {

    let dataObject = {
        name: firstName,
        lastName: sirName,
        hairColor: hair,
    }
    let jsonConverter = JSON.stringify(dataObject)
    console.log(jsonConverter);
}
converter('George', 'Jones', 'Brown')